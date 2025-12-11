"use client";

import { createPost } from "../action";

export function CreateMessageForm() {
    return (
        <form action={createPost} className="flex flex-col gap-2 max-w-sm">
            <input
                name="title"
                placeholder="タイトル"
                required
                className="border p-2"
            />
            <input
                name="content"
                placeholder="メッセージ内容"
                required
                className="border p-2"
            />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                投稿する
            </button>
        </form>
    );
}