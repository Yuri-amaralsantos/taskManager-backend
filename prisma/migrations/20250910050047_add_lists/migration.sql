/*
  Warnings:

  - You are about to drop the column `boardId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Card` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[listId,title]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `listId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_boardId_fkey";

-- DropIndex
DROP INDEX "public"."Card_boardId_title_key";

-- AlterTable
ALTER TABLE "public"."Card" DROP COLUMN "boardId",
DROP COLUMN "status",
ADD COLUMN     "listId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "public"."CardStatus";

-- CreateTable
CREATE TABLE "public"."List" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "boardId" INTEGER NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_listId_title_key" ON "public"."Card"("listId", "title");

-- AddForeignKey
ALTER TABLE "public"."List" ADD CONSTRAINT "List_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "public"."Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_listId_fkey" FOREIGN KEY ("listId") REFERENCES "public"."List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
