"use server";

import { prisma } from "@/lib/prisma";

export async function createPost(formData: FormData) {
    const content = formData.get("content");
    const title = formData.get("title");

    if (!content || !title) return;

    await prisma.post.create({
        data: {
            content: content.toString(),
            title: title.toString(),
        },
    });
}

export async function getPosts() {
    return prisma.post.findMany({
        orderBy: { id: "desc" }
    });
}