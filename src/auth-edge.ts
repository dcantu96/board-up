import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function isAuthenticated(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  return !!token;
}
