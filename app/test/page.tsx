import { prisma } from "@/lib/prisma";
import { CreateMessageForm } from "../components/CreateMessageForm";
import { Post } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function Home() {
    // 1. サーバー側で直接データを取得（APIを叩く必要なし！）
    const messages: Post[] = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <main style={{ padding: "2rem" }}>
            <h1>掲示板 </h1>

            {/* 投稿フォーム（後述） */}
            <CreateMessageForm />

            <hr />

            <ul>
                {messages.map((msg: Post) => (
                    <li key={msg.id}>
                        {msg.content} <small>({msg.createdAt.toLocaleString()})</small>
                    </li>
                ))}
            </ul>
        </main>
    );
}