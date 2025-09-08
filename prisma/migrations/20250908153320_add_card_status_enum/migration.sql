/*
  Warnings:

  - The `status` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."CardStatus" AS ENUM ('TODO', 'DOING', 'DONE', 'URGENT');

-- AlterTable
ALTER TABLE "public"."Card" DROP COLUMN "status",
ADD COLUMN     "status" "public"."CardStatus" NOT NULL DEFAULT 'TODO';
