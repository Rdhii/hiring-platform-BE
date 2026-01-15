import { Router } from "express";
import { PostController } from "./post.controller";

const postRouter = Router();
const postController = new PostController();

postRouter.get("/", postController.getPosts);

postRouter.post("/jobs", postController.createJob);

export default postRouter;