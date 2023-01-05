import { MigrationInterface, QueryRunner } from "typeorm";

export class pruebaMigration1672951603827 implements MigrationInterface {
    name = 'pruebaMigration1672951603827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "score" ("question" integer NOT NULL, "category" integer NOT NULL, CONSTRAINT "PK_57516f704b64393290a8ea7e169" PRIMARY KEY ("question", "category"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e75862eee739bc104255cd632c" ON "score" ("question") `);
        await queryRunner.query(`CREATE INDEX "IDX_8ca30a73364a4115bfd00e0217" ON "score" ("category") `);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_e75862eee739bc104255cd632c8" FOREIGN KEY ("question") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_8ca30a73364a4115bfd00e0217a" FOREIGN KEY ("category") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_8ca30a73364a4115bfd00e0217a"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_e75862eee739bc104255cd632c8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8ca30a73364a4115bfd00e0217"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e75862eee739bc104255cd632c"`);
        await queryRunner.query(`DROP TABLE "score"`);
    }

}
