import Link from "next/link";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-lg font-bold">Board Up</h1>
        <Link
          href="/api/auth/signin"
          className="text-sm px-4 py-2 rounded bg-zinc-900 text-white hover:bg-zinc-800"
        >
          Sign in
        </Link>
      </header>
      <main className="p-6">{children}</main>
    </>
  );
}
