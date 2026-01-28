import { prisma } from "../../lib/prisma";

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
}
