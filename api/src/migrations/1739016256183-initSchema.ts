import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1739016256183 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create pig table
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "pig" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "status" VARCHAR(50) DEFAULT 'default',
                "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create animal table
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "animal" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "type" VARCHAR(50) NOT NULL,
                "arkipoCounter" INTEGER DEFAULT 0,
                "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "animal"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "pig"`);
    }
}