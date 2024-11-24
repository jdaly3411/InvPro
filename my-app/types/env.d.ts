// types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      JWT_SECRET_KEY: string;
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      SMTP_HOST: string;
      SMTP_PORT: string;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
      NEXT_PUBLIC_APP_URL: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export {};
