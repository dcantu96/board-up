import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const client = globalForPrisma.prisma || new PrismaClient({ adapter });

export default client;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
