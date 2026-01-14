import { PostRepository } from "./post.repository";

export class PostService {
    private postRepo = new PostRepository();

    async getAllPosts() {
        return await this.postRepo.getAllPosts();
    }
}