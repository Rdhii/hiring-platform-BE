import { prisma } from "../../lib/prisma";

export class PostRepository {
    async getAllPosts() {
        const posts = await prisma.postJob.findMany();
        return posts;
    }

    async createJob(data: {jobName:string; jobType:string; jobDescription:string; candidateNeeded:number; minimumSalary:number; maximumSalary:number}) {
        const newJob = await prisma.postJob.create({
            data: {
                jobName: data.jobName,
                jobType: data.jobType,
                jobDescription: data.jobDescription,
                candidateNeeded: data.candidateNeeded,
                minimumSalary: data.minimumSalary,
                maximumSalary: data.maximumSalary
            }
            
        });
        return newJob;
    }
}