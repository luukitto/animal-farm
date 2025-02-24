import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pig } from '../entities/pig.entity';
import { DataSource } from "typeorm";
import { Animal } from "../entities/animal.entity";

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USER || 'pig',
    password: process.env.DATABASE_PASSWORD || 'bidzina',
    database: process.env.DATABASE_NAME || 'animal_farm',
    entities: [Pig, Animal],
    synchronize: false,
    logging: true,
    migrations: ['dist/migrations/*.ts'],
    migrationsTableName: 'migrations',
};

export default new DataSource({
    ...databaseConfig,
    migrations: ['src/migrations/*.ts'],
} as any);