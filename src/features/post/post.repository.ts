import { prisma } from "../../lib/prisma";
import { CreateCandidateDto } from "../../dto/createCandidate.dto";

export class PostRepository {
  async getAllPosts() {
    const posts = await prisma.postJob.findMany({
        include: { profileRequired: true },
    });
    return posts;
  }

  async getJobById(id: number) {
    const jobs = await prisma.postJob.findUnique({
      where: { id },
        include: { profileRequired: true },
    });
    return jobs;
  }

  async createJob(data: {
    jobName: string;
    jobType: string;
    jobDescription: string;
    candidateNeeded: number;
    minimumSalary: number;
    maximumSalary: number;
    profileRequired?: {
        fullName?: string;
        photoProfile?: string;
        gender?: string;
        domicile?: string;
        email?: string;
        phoneNumber?: string; 
        linkedinLink?: string;
        dateOfBirth?: string;
    }
  }) {
    const newJob = await prisma.postJob.create({
      data: {
        jobName: data.jobName,
        jobType: data.jobType,
        jobDescription: data.jobDescription,
        candidateNeeded: data.candidateNeeded,
        minimumSalary: data.minimumSalary,
        maximumSalary: data.maximumSalary,
        profileRequired: {
            create: {
                fullName: data.profileRequired?.fullName || "Mandatory",
                photoProfile: data.profileRequired?.photoProfile || "Mandatory",
                gender: data.profileRequired?.gender || "Optional",
                domicile: data.profileRequired?.domicile || "Optional",
                email: data.profileRequired?.email || "Mandatory",
                phoneNumber: data.profileRequired?.phoneNumber || "Mandatory",
                linkedinLink: data.profileRequired?.linkedinLink || "Optional",
                dateOfBirth: data.profileRequired?.dateOfBirth || "Optional",
            }
        }
      },
      include: { profileRequired: true },
    });
    return newJob;
  }

  async getCandidatesByJobId(jobId: number) {
    const applications = await prisma.candidateApplication.findMany({
      where: { postJobId: jobId },
    });
    return applications;
  }

async createCandidate(data: CreateCandidateDto) {

  // 1️⃣ Ambil job + profileRequired
  const job = await prisma.postJob.findUnique({
    where: { id: data.postJobId },
    include: { profileRequired: true },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  const requirement = job.profileRequired?.[0];

  // 2️⃣ Validasi berdasarkan requirement
  if (requirement.fullName === "Mandatory" && !data.fullName) {
    throw new Error("Full name is required");
  }

  if (requirement.photoProfile === "Mandatory" && !data.photoProfile) {
    throw new Error("Photo profile is required");
  } 

  if (requirement.linkedinLink === "Mandatory" && !data.linkedinLink) {
    throw new Error("LinkedIn is required");
  }
  
  if (requirement.dateOfBirth === "Mandatory" && !data.dateOfBirth) {
    throw new Error("Date of birth is required");
  }

  if (requirement.domicile === "Mandatory" && !data.domicile) {
    throw new Error("Domicile is required");
  }

  if (requirement.email === "Mandatory" && !data.email) {
    throw new Error("Email is required");
  }

  if (requirement.gender === "Mandatory" && !data.gender) {
    throw new Error("Gender is required");
  }

  if (requirement.phoneNumber === "Mandatory" && !data.phoneNumber) {
    throw new Error("Phone number is required");
  } 

  return await prisma.candidateApplication.create({
    data,
  });
}
}
