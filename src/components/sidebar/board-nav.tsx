import Link from "next/link";

export default function BoardNav() {
  const boards = [
    { id: "1", title: "Demo Board", slug: "demo-board" },
    { id: "2", title: "Design Sprint", slug: "design-sprint" },
  ];

  return (
    <nav className="flex-1 overflow-auto px-2 py-2">
      {boards.map((board) => (
        <Link
          key={board.id}
          href={`/boards/${board.slug}`}
          className="block px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700"
        >
          {board.title}
        </Link>
      ))}
    </nav>
  );
}
