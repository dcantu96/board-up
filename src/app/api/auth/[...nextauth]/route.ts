import NextAuth from "next-auth";
import { authConfig } from "@/auth";

const {
  handlers: { GET, POST },
} = NextAuth(authConfig);

export { GET, POST };
