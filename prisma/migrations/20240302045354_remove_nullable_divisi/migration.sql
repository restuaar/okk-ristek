/*
  Warnings:

  - Made the column `divisiId` on table `Anggota` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Anggota" DROP CONSTRAINT "Anggota_divisiId_fkey";

-- AlterTable
ALTER TABLE "Anggota" ALTER COLUMN "divisiId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_divisiId_fkey" FOREIGN KEY ("divisiId") REFERENCES "Divisi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
