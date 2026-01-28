import { PostRepository } from "./post.repository";

export class PostService {
  private postRepo = new PostRepository();

  async getAllPosts() {
    return await this.postRepo.getAllPosts();
  }

  async getJobById(id: number) {
    return await this.postRepo.getJobById(id);
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
    return await this.postRepo.createJob(data);
  }

  async getCandidatesByJobId(jobId: number) {
    return await this.postRepo.getCandidatesByJobId(jobId);
  }
}
