-- DropForeignKey
ALTER TABLE "Anggota" DROP CONSTRAINT "Anggota_divisiId_fkey";

-- AlterTable
ALTER TABLE "Anggota" ALTER COLUMN "divisiId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_divisiId_fkey" FOREIGN KEY ("divisiId") REFERENCES "Divisi"("id") ON DELETE SET NULL ON UPDATE CASCADE;
