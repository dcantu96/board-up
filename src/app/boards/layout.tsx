// app/boards/layout.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function BoardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) redirect("/");

  return <>{children} </>;
}
