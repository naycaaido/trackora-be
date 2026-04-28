import dotenv from "dotenv";

dotenv.config();

function getEnv(name, fallback) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

const allowedOrigins = getEnv("CORS_ORIGIN", "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const env = {
  host: getEnv("HOST", "localhost"),
  port: Number(getEnv("PORT", "8000")),
  databaseUrl: getEnv(
    "DATABASE_URL",
    "postgres://postgres:postgres@localhost:5432/trackora",
  ),
  allowedOrigins,
};
