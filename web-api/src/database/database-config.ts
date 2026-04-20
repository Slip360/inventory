import * as path from "path";
import { configDotenv } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";

/**
 * Load environment variables from the root .env file
 */
configDotenv();

/**
 * Path to entities
 */
const entitiesPath = path.join(__dirname + '/entities/**/*{.ts,.js}');

/**
 * Path to migrations
 */
const migrationsPath = path.join(__dirname + '/../migrations/*{.ts,.js}');

/**
 * TypeORM configuration
 */
export const typeormConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
    migrationsRun: true,
    migrationsTableName: 'migrations',
    migrationsTransactionMode: 'all',
    logging: true,
}

/**
 * Create and export the DataSource instance
 */
export const dataSource = new DataSource(typeormConfig);
