import { prisma } from "../../lib/prisma";

export class PostRepository {
    async getAllPosts() {
        const posts = await prisma.postJob.findMany();
        return posts;
    }
}