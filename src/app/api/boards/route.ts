// app/api/boards/route.ts
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // normalize accents
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with hyphens
    .replace(/^-+|-+$/g, "") // trim leading/trailing hyphens
    .substring(0, 60); // optional: limit length
}

export async function POST(req: Request) {
  const session = await auth();
  console.log("Creating board for session:", { session, req });
  if (!session || !session.user || !session.user.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = await req.json();
  const slug = slugify(name);

  const board = await prisma.board.create({
    data: {
      name,
      slug,
      userId: session.user.id,
      lists: {
        create: [
          { title: "To Do" },
          { title: "In Progress" },
          { title: "Done" },
        ],
      },
    },
  });

  return NextResponse.json({ id: board.id, slug: board.slug });
}
