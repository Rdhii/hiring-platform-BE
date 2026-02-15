import { Router } from "express";
import { PostController } from "./post.controller";

const postRouter = Router();
const postController = new PostController();
postRouter.get("/:id", postController.getJobById);

postRouter.get("/", postController.getPosts);


postRouter.post("/create", postController.createJob);

postRouter.get("/:id/candidates", postController.getCandidatesByJobId);

postRouter.get("/login", postController.loginExample);

export default postRouter;

postRouter.get("/login", postController.loginExample);