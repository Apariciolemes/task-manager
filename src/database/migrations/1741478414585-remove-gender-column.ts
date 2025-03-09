import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveGenderColumn1741478414585 implements MigrationInterface {
    name = 'RemoveGenderColumn1741478414585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "gender"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "gender" character varying NOT NULL DEFAULT ''`);
    }

}
