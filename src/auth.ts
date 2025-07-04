// lib/auth.config.ts (safe to import in middleware)
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authConfig: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma), // ❗used only on server
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "database",
  },
};
