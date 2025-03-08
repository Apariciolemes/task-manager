import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1741474581764 implements MigrationInterface {
  name = 'UserMigration1741474581764';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_entity" ADD "gender" character varying NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "gender"`);
  }
}
