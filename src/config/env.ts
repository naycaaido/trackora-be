import dotenv from "dotenv";

dotenv.config();

function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(getEnv("PORT", "8000")),
  databaseUrl: getEnv("DATABASE_URL", "postgres://postgres:postgres@localhost:5432/trackora"),
  corsOrigin: getEnv("CORS_ORIGIN", "http://localhost:5173"),
};
