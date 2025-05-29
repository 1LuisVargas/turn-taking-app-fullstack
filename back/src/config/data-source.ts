// Importing modules
import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD, DB_USERNAME } from "./envs";
import User from "../entities/User";
import Appointment from "../entities/Appointment";
import Credential from "../entities/Credential";

// Set DataSource
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    dropSchema: false, // Set to true to erase DB
    synchronize: true,
    logging: false,
    entities: [Credential, User, Appointment],
    subscribers: [],
    migrations: [],
})

// Creating and exporting repositories
export const credentialRepository = AppDataSource.getRepository(Credential);
export const userRepository = AppDataSource.getRepository(User);
export const appointmentRepository = AppDataSource.getRepository(Appointment);