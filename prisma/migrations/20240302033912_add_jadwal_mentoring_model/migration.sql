/*
  Warnings:

  - A unique constraint covering the columns `[nomor]` on the table `KelompokOKK` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "JadwalMentoring" (
    "id" SERIAL NOT NULL,
    "waktu" TIMESTAMP(3) NOT NULL,
    "tempat" TEXT NOT NULL,
    "materi" TEXT NOT NULL,
    "kelompokId" INTEGER NOT NULL,

    CONSTRAINT "JadwalMentoring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_KehadiranMentee" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_KehadiranMentee_AB_unique" ON "_KehadiranMentee"("A", "B");

-- CreateIndex
CREATE INDEX "_KehadiranMentee_B_index" ON "_KehadiranMentee"("B");

-- CreateIndex
CREATE UNIQUE INDEX "KelompokOKK_nomor_key" ON "KelompokOKK"("nomor");

-- AddForeignKey
ALTER TABLE "JadwalMentoring" ADD CONSTRAINT "JadwalMentoring_kelompokId_fkey" FOREIGN KEY ("kelompokId") REFERENCES "KelompokOKK"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KehadiranMentee" ADD CONSTRAINT "_KehadiranMentee_A_fkey" FOREIGN KEY ("A") REFERENCES "JadwalMentoring"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KehadiranMentee" ADD CONSTRAINT "_KehadiranMentee_B_fkey" FOREIGN KEY ("B") REFERENCES "Mentee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
