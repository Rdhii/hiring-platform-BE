import { PostService } from "./post.service";
import { Request, Response } from "express";

export class PostController {
    postService = new PostService();

    getPosts = async (req: Request, res: Response) => {
        const posts = await this.postService.getAllPosts();
        return res.json(posts);
    }
}