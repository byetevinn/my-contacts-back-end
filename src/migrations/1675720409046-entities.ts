import { MigrationInterface, QueryRunner } from "typeorm";

export class entities1675720409046 implements MigrationInterface {
    name = 'entities1675720409046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
