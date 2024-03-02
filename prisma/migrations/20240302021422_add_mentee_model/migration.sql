-- CreateEnum
CREATE TYPE "JalurMasukType" AS ENUM ('SIMAK_UI', 'SNMPTN', 'SBMPTN', 'PRESTASI', 'TALENT_SCOUTING');

-- CreateTable
CREATE TABLE "Mentee" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "fakultas" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "angkatan" INTEGER NOT NULL,
    "jalurMasuk" "JalurMasukType" NOT NULL,

    CONSTRAINT "Mentee_pkey" PRIMARY KEY ("id")
);
