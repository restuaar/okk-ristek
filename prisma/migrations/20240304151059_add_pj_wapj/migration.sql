/*
  Warnings:

  - A unique constraint covering the columns `[pjId]` on the table `Divisi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[waPjId]` on the table `Divisi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[waPj2Id]` on the table `Divisi` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Divisi" ADD COLUMN     "pjId" INTEGER,
ADD COLUMN     "waPj2Id" INTEGER,
ADD COLUMN     "waPjId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Divisi_pjId_key" ON "Divisi"("pjId");

-- CreateIndex
CREATE UNIQUE INDEX "Divisi_waPjId_key" ON "Divisi"("waPjId");

-- CreateIndex
CREATE UNIQUE INDEX "Divisi_waPj2Id_key" ON "Divisi"("waPj2Id");

-- AddForeignKey
ALTER TABLE "Divisi" ADD CONSTRAINT "Divisi_pjId_fkey" FOREIGN KEY ("pjId") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Divisi" ADD CONSTRAINT "Divisi_waPjId_fkey" FOREIGN KEY ("waPjId") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Divisi" ADD CONSTRAINT "Divisi_waPj2Id_fkey" FOREIGN KEY ("waPj2Id") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;
