import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function BoardsPage() {
  const boards = await prisma.board.findMany();

  if (!boards || boards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">No Boards Available</h1>
        <Link href="/boards/new" className="text-blue-600 hover:underline">
          Create a new board
        </Link>
      </div>
    );
  }

  if (boards.length === 1) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">Single Board Available</h1>
        <Link
          href={`/boards/${boards[0].slug}`}
          className="text-blue-600 hover:underline"
        >
          Go to {boards[0].name}
        </Link>
      </div>
    );
  }

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
