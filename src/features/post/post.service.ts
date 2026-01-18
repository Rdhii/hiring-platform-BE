import { PostRepository } from "./post.repository";

export class PostService {
    private postRepo = new PostRepository();

    async getAllPosts() {
        return await this.postRepo.getAllPosts();
    }

    async getJobById(id: number){
        return await this.postRepo.getJobById(id);
    }

    async createJob(data: {jobName:string; jobType:string; jobDescription:string; candidateNeeded:number; minimumSalary:number; maximumSalary:number}) {
        return await this.postRepo.createJob(data);
    }
}