/*
  Warnings:

  - Made the column `position` on table `Card` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."Card_listId_title_key";

-- AlterTable
ALTER TABLE "public"."Card" ALTER COLUMN "position" SET NOT NULL;
