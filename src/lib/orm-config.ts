import {ConnectionOptions} from "typeorm";
import dotenv from "dotenv";

if (process.env.NODE_ENV === 'local') {
    dotenv.config({path: "script/env/.env.local"})
} else if (process.env.NODE_ENV === 'prod') {
    dotenv.config({path: "script/env/.env.prod"})
}

const STORAGE_DATABASE_HOST = process.env.STORAGE_DATABASE_HOST || "localhost"
const STORAGE_DATABASE_PORT = process.env.STORAGE_DATABASE_PORT || 3306
const STORAGE_DATABASE_USERNAME = process.env.STORAGE_DATABASE_USERNAME || "root"
const STORAGE_DATABASE_PASSWORD = process.env.STORAGE_DATABASE_PASSWORD || "password"
const STORAGE_DATABASE_DATABASE = process.env.STORAGE_DATABASE_DATABASE || "todo"

export const TypeOrmConfig: ConnectionOptions = {
    type: "mysql",
    host: STORAGE_DATABASE_HOST,
    // @ts-ignore
    port: STORAGE_DATABASE_PORT,
    username: STORAGE_DATABASE_USERNAME,
    password: STORAGE_DATABASE_PASSWORD,
    database: STORAGE_DATABASE_DATABASE,
    synchronize: false,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [],
    subscribers: [],
    cli: {
        entitiesDir: "src/entity",
    }
}