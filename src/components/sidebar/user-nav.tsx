import { signIn } from "next-auth/react";
import { IconPlus } from "@tabler/icons-react";
import { auth } from "@/auth";
import Link from "next/link";
import UserDropdown from "./user-dropdown";

export default async function UserNav() {
  const session = await auth();

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 ease-in-out">
      <div className="relative">
        {session ? (
          <UserDropdown userInitial={session.user?.name?.[0] ?? "?"} />
        ) : (
          <button
            onClick={() => signIn("google")}
            className="text-sm px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            Sign in
          </button>
        )}
      </div>

      <Link
        href="/boards/new"
        className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700"
        title="Create board"
      >
        <IconPlus className="w-4 h-4" />
      </Link>
    </div>
  );
}
