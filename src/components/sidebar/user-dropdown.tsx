"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { IconChevronDown } from "@tabler/icons-react";

export default function UserDropdown({ userInitial }: { userInitial: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center font-semibold text-xs">
          {userInitial}
        </div>
        <IconChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute left-0 top-8 w-40 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow transition-colors duration-300">
          <button
            onClick={() => signOut()}
            className="block px-4 py-2 w-full text-left hover:bg-zinc-100 dark:hover:bg-zinc-700"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
