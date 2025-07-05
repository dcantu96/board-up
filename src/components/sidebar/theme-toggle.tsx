"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored ?? "light";
    document.documentElement.classList.add(initial);
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 p-3 flex items-center justify-between transition-colors duration-300 ease-in-out">
      <span className="text-xs text-zinc-500 dark:text-zinc-400">Theme</span>
      <button
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700"
      >
        {theme === "dark" ? (
          <IconSun className="w-4 h-4" />
        ) : (
          <IconMoon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
