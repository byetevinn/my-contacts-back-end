import { MigrationInterface, QueryRunner } from "typeorm";

export class entities1675302600975 implements MigrationInterface {
    name = 'entities1675302600975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "isActive" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

}
