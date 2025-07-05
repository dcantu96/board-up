import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LandingPage() {
  const session = await auth();

  if (session?.user) {
    const board = await prisma.board.findFirst({
      where: { userId: session.user.id },
      orderBy: { createdAt: "asc" },
    });

    if (board) {
      redirect(`/boards/${board.slug}`);
    }

    redirect(`/boards/new`);
  }

  return (
    <section className="max-w-2xl mx-auto text-center mt-20 px-4">
      <h1 className="text-4xl font-bold mb-4">
        Organize your work visually with Board Up
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Create boards, drag cards, and track progress with ease. Simple, fast,
        and private.
      </p>
      <Link
        href="/api/auth/signin"
        className="inline-block bg-zinc-900 text-white px-6 py-3 rounded hover:bg-zinc-800 transition-colors"
      >
        Get Started
      </Link>
    </section>
  );
}
