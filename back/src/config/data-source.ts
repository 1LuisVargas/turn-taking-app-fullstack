import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
})