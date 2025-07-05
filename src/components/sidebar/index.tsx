import UserNav from "./user-nav";
import BoardNav from "./board-nav";
import ThemeToggle from "./theme-toggle";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 flex flex-col text-zinc-800 dark:text-zinc-100 transition-colors duration-300 ease-in-out">
      <UserNav />
      <BoardNav />
      <ThemeToggle />
    </aside>
  );
}
