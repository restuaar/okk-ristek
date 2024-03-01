-- CreateEnum
CREATE TYPE "AnggotaType" AS ENUM ('PJ', 'WA_PJ', 'WA_PJ2', 'STAFF');

-- CreateTable
CREATE TABLE "Anggota" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "fakultas" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "angkatan" INTEGER NOT NULL,
    "jenis" "AnggotaType",

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id")
);
