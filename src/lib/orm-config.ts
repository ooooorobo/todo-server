const STORAGE_DATABASE_HOST = process.env.STORAGE_DATABASE_HOST
const STORAGE_DATABASE_PORT = process.env.STORAGE_DATABASE_PORT
const STORAGE_DATABASE_USERNAME = process.env.STORAGE_DATABASE_USERNAME
const STORAGE_DATABASE_PASSWORD = process.env.STORAGE_DATABASE_PASSWORD
const STORAGE_DATABASE_DATABASE = process.env.STORAGE_DATABASE_DATABASE

export const TypeOrmConfig = {
    "type": "mysql",
    "host": STORAGE_DATABASE_HOST,
    "port": STORAGE_DATABASE_PORT,
    "username": STORAGE_DATABASE_USERNAME,
    "password": STORAGE_DATABASE_PASSWORD,
    "database": STORAGE_DATABASE_DATABASE,
    "synchronize": false,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [],
    "subscribers": [],
    "cli": {
        "entitiesDir": "src/entity",
    }
}