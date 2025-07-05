"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBoardPage() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/boards", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      router.push(`/app/boards/${data.slug}`);
    } else {
      alert("Failed to create board");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-4">
      <h1 className="text-xl font-bold mb-4">Create a New Board</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Board title"
        className="w-full px-4 py-2 mb-4 border border-zinc-300 rounded dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
        required
      />
      <button
        type="submit"
        className="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-zinc-800"
      >
        Create Board
      </button>
    </form>
  );
}
