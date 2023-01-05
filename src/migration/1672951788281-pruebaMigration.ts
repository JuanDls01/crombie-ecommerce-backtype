import { MigrationInterface, QueryRunner } from "typeorm";

export class pruebaMigration1672951788281 implements MigrationInterface {
    name = 'pruebaMigration1672951788281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_e75862eee739bc104255cd632c8"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_8ca30a73364a4115bfd00e0217a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e75862eee739bc104255cd632c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8ca30a73364a4115bfd00e0217"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "PK_57516f704b64393290a8ea7e169"`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "PK_8ca30a73364a4115bfd00e0217a" PRIMARY KEY ("category")`);
        await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "question"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "PK_8ca30a73364a4115bfd00e0217a"`);
        await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "score" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "PK_327e5a5890df4462edf4ac9fa30" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "score" ADD "projectId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "PK_327e5a5890df4462edf4ac9fa30"`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "PK_54c088d290e5d331cfd92c7a2d3" PRIMARY KEY ("userId", "projectId")`);
        await queryRunner.query(`CREATE INDEX "IDX_327e5a5890df4462edf4ac9fa3" ON "score" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3bfcff7e884c4d23a64e216937" ON "score" ("projectId") `);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_327e5a5890df4462edf4ac9fa30" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_3bfcff7e884c4d23a64e2169376" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_3bfcff7e884c4d23a64e2169376"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_327e5a5890df4462edf4ac9fa30"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3bfcff7e884c4d23a64e216937"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_327e5a5890df4462edf4ac9fa3"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "PK_54c088d290e5d331cfd92c7a2d3"`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "PK_327e5a5890df4462edf4ac9fa30" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "projectId"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "PK_327e5a5890df4462edf4ac9fa30"`);
        await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "score" ADD "category" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "PK_8ca30a73364a4115bfd00e0217a" PRIMARY KEY ("category")`);
        await queryRunner.query(`ALTER TABLE "score" ADD "question" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "PK_8ca30a73364a4115bfd00e0217a"`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "PK_57516f704b64393290a8ea7e169" PRIMARY KEY ("question", "category")`);
        await queryRunner.query(`CREATE INDEX "IDX_8ca30a73364a4115bfd00e0217" ON "score" ("category") `);
        await queryRunner.query(`CREATE INDEX "IDX_e75862eee739bc104255cd632c" ON "score" ("question") `);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_8ca30a73364a4115bfd00e0217a" FOREIGN KEY ("category") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_e75862eee739bc104255cd632c8" FOREIGN KEY ("question") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
