// lib/env.ts
export function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}

export const env = {
  DATABASE_URL: getEnvVar("DATABASE_URL"),
  JWT_SECRET_KEY: getEnvVar("JWT_SECRET_KEY"),
  NEXTAUTH_URL: getEnvVar("NEXTAUTH_URL"),
  NEXTAUTH_SECRET: getEnvVar("NEXTAUTH_SECRET"),
  SMTP_HOST: getEnvVar("SMTP_HOST"),
  SMTP_PORT: parseInt(getEnvVar("SMTP_PORT")),
  SMTP_USER: getEnvVar("SMTP_USER"),
  SMTP_PASSWORD: getEnvVar("SMTP_PASSWORD"),
  APP_URL: getEnvVar("NEXT_PUBLIC_APP_URL"),
  IS_PRODUCTION: process.env.NODE_ENV === "production",
} as const;
