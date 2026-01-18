import { Request, Response, Router } from "express";
import postRouter from "../features/post/post.router";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Hiring Platform API");
})

router.use("/jobs", postRouter)

export default router;