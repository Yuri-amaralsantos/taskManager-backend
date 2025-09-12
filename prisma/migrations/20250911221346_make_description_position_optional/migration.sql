-- AlterTable
ALTER TABLE "public"."Card" ADD COLUMN     "position" INTEGER,
ALTER COLUMN "description" DROP NOT NULL;
