/*
  Warnings:

  - A unique constraint covering the columns `[kelompokId]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kelompokId` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kelompokId` to the `Mentor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mentee" ADD COLUMN     "jadwalId" INTEGER,
ADD COLUMN     "kelompokId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "kelompokId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "KelompokOKK" (
    "id" SERIAL NOT NULL,
    "nomor" INTEGER NOT NULL,

    CONSTRAINT "KelompokOKK_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JadwalMentoring" (
    "id" SERIAL NOT NULL,
    "waktu" TIMESTAMP(3) NOT NULL,
    "tempat" TEXT NOT NULL,
    "materi" TEXT NOT NULL,
    "kelompokId" INTEGER NOT NULL,

    CONSTRAINT "JadwalMentoring_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_kelompokId_key" ON "Mentor"("kelompokId");

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_kelompokId_fkey" FOREIGN KEY ("kelompokId") REFERENCES "KelompokOKK"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_kelompokId_fkey" FOREIGN KEY ("kelompokId") REFERENCES "KelompokOKK"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_jadwalId_fkey" FOREIGN KEY ("jadwalId") REFERENCES "JadwalMentoring"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMentoring" ADD CONSTRAINT "JadwalMentoring_kelompokId_fkey" FOREIGN KEY ("kelompokId") REFERENCES "KelompokOKK"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
