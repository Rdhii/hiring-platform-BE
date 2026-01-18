import { PostService } from "./post.service";
import { Request, Response } from "express";

export class PostController {
    postService = new PostService();

    getPosts = async (req: Request, res: Response) => {
        const posts = await this.postService.getAllPosts();
        return res.json(posts);
    }

    getJobById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const job = await this.postService.getJobById(id);
        return res.status(200).json(job);
    }

    createJob = async (req: Request, res: Response) => {
        try {
            const { jobName, jobType, jobDescription, candidateNeeded, minimumSalary, maximumSalary } = req.body;

            if (!jobName || !jobType || !jobDescription || !candidateNeeded || !minimumSalary || !maximumSalary) {
                return res.status(400).json({ error: "All fields are required." });
            }

            const newJob = await this.postService.createJob({
                jobName,
                jobType,
                jobDescription,
                candidateNeeded,
                minimumSalary,
                maximumSalary
            });

            return res.status(201).json({
                message: "Job created successfully",
                job: newJob
            })
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}