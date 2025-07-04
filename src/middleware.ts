import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "@/auth-edge";

export async function middleware(request: NextRequest) {
  const authenticated = await isAuthenticated(request);

  if (!authenticated) {
    const url = new URL("/api/auth/signin", request.url);
    url.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/boards/:path*"],
};
