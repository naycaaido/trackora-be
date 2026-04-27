import createApp from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";

export async function startServer(): Promise<void> {
  await prisma.$connect();
  const app = createApp();
  app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
  });
}

startServer()