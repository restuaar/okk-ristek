import { AnggotaType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const anggotas = [
    {
      nama: 'Udin',
      fakultas: 'Fakultas Teknik',
      jurusan: 'Teknik Informatika',
      angkatan: 2019,
      jenis: AnggotaType.STAFF,
    },
    {
      nama: 'Joko',
      fakultas: 'Fakultas Ekonomi',
      jurusan: 'Manajemen',
      angkatan: 2020,
      jenis: AnggotaType.STAFF,
    },
    {
      nama: 'Siti',
      fakultas: 'Fakultas Psikologi',
      jurusan: 'Psikologi',
      angkatan: 2018,
      jenis: AnggotaType.STAFF,
    },
    {
      nama: 'Rina',
      fakultas: 'Fakultas Hukum',
      jurusan: 'Ilmu Hukum',
      angkatan: 2021,
      jenis: AnggotaType.STAFF,
    },
    {
      nama: 'Budi',
      fakultas: 'Fakultas Ilmu Sosial dan Ilmu Politik',
      jurusan: 'Ilmu Administrasi Negara',
      angkatan: 2017,
      jenis: AnggotaType.STAFF,
    },
    {
      nama: 'Wati',
      fakultas: 'Fakultas Farmasi',
      jurusan: 'Farmasi',
      angkatan: 2019,
      jenis: AnggotaType.STAFF,
    },
  ];

  let id = 1;
  for (const anggota of anggotas) {
    await prisma.anggota.upsert({
      where: { id: id },
      update: {},
      create: anggota,
    });
    id++;
  }

  console.log('Seeded the database...');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
