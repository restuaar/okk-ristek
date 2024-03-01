/*
  Warnings:

  - Added the required column `divisiId` to the `Anggota` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DivisiType" AS ENUM ('PENGURUS_INTI', 'BPH');

-- AlterTable
ALTER TABLE "Anggota" ADD COLUMN     "divisiId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Divisi" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" "DivisiType" NOT NULL,

    CONSTRAINT "Divisi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Divisi_nama_key" ON "Divisi"("nama");

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_divisiId_fkey" FOREIGN KEY ("divisiId") REFERENCES "Divisi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
