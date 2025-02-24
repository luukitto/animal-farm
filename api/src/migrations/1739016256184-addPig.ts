import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPig1739016256184 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO pig (name, status) 
            VALUES ('Bidzina', 'default')
            ON CONFLICT DO NOTHING
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM pig WHERE id = 1;
        `);
    }
}