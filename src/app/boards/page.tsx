import { PrismaClient } from "@/generated/prisma";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function BoardsPage() {
  const boards = await prisma.board.findMany();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-2xl font-bold">Boards Page</h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {boards.map((board) => (
            <li key={board.id} className="mb-2 tracking-[-.01em]">
              <Link
                href={`/boards/${board.slug}`}
                className="text-blue-600 hover:underline"
              >
                {board.name}
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
