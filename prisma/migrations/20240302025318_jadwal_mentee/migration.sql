/*
  Warnings:

  - You are about to drop the column `jadwalId` on the `Mentee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_jadwalId_fkey";

-- AlterTable
ALTER TABLE "Mentee" DROP COLUMN "jadwalId";

-- CreateTable
CREATE TABLE "_JadwalMentoringToMentee" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JadwalMentoringToMentee_AB_unique" ON "_JadwalMentoringToMentee"("A", "B");

-- CreateIndex
CREATE INDEX "_JadwalMentoringToMentee_B_index" ON "_JadwalMentoringToMentee"("B");

-- AddForeignKey
ALTER TABLE "_JadwalMentoringToMentee" ADD CONSTRAINT "_JadwalMentoringToMentee_A_fkey" FOREIGN KEY ("A") REFERENCES "JadwalMentoring"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JadwalMentoringToMentee" ADD CONSTRAINT "_JadwalMentoringToMentee_B_fkey" FOREIGN KEY ("B") REFERENCES "Mentee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
