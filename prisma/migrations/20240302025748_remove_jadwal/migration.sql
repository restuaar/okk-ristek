/*
  Warnings:

  - You are about to drop the `JadwalMentoring` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JadwalMentoringToMentee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JadwalMentoring" DROP CONSTRAINT "JadwalMentoring_kelompokId_fkey";

-- DropForeignKey
ALTER TABLE "_JadwalMentoringToMentee" DROP CONSTRAINT "_JadwalMentoringToMentee_A_fkey";

-- DropForeignKey
ALTER TABLE "_JadwalMentoringToMentee" DROP CONSTRAINT "_JadwalMentoringToMentee_B_fkey";

-- DropTable
DROP TABLE "JadwalMentoring";

-- DropTable
DROP TABLE "_JadwalMentoringToMentee";
