import "dotenv/config";

export const PORT:number = Number(process.env.PORT) || 3000;

// Postgres
export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_PORT: number = Number(process.env.DB_PORT);
export const DB_USERNAME: string = process.env.DB_USERNAME || "test";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "test";
export const DB_NAME: string = process.env.DB_NAME || "test";
