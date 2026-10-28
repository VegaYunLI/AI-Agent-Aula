import { PrismaClient } from "@prisma/client";

/**
 * Utilitário singleton para conexão com o Prisma Client.
 * Evita múltiplas conexões com o SQLite durante o hot-reload do Next.js em desenvolvimento.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
