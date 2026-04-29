import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/client.js";
import { env } from "./env.js";

const adapter = new PrismaPg({ connectionString: env.databaseUrl });

export const prisma = new PrismaClient({ adapter });
