/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[boardId,title]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "public"."Board"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Card_boardId_title_key" ON "public"."Card"("boardId", "title");
