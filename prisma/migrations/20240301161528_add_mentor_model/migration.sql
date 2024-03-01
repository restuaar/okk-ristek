-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "fakultas" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "angkatan" INTEGER NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);
