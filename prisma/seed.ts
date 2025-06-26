import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  const board = await prisma.board.upsert({
    where: { slug: "demo-board" },
    update: {},
    create: {
      name: "Demo Board",
      slug: "demo-board",
      userId: user.id,
      lists: {
        create: [
          {
            title: "To Do",
            cards: {
              create: [{ content: "Seed task 1" }, { content: "Seed task 2" }],
            },
          },
          {
            title: "In Progress",
            cards: {
              create: [{ content: "Working on task" }],
            },
          },
          {
            title: "Done",
            cards: {
              create: [{ content: "Finished task" }],
            },
          },
        ],
      },
    },
  });

  console.log(`Seeded board: ${board.name}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
