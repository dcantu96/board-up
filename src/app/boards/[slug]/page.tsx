import { PrismaClient } from "@/generated/prisma";
import { PageProps } from "@/types";

const prisma = new PrismaClient();

export default async function BoardPage({
  params,
}: PageProps<{ slug: string }>) {
  const { slug } = await params;
  const board = await prisma.board.findUnique({
    where: { slug },
  });

  if (!board) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          <h1 className="text-2xl font-bold">Board Not Found</h1>
          <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            The board you are looking for {params.slug} does not exist.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-2xl font-bold">Board: {board.name}</h1>
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          This is the board with ID: {board.id}. You can add more details here.
        </p>
      </main>
    </div>
  );
}
