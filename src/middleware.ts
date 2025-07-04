import { auth } from "@/auth"; // your custom auth config path
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();

  const isAuthenticated = !!session;
}
