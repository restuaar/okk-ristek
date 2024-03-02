import { AnggotaType, JalurMasukType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const division = [
    {
      nama: 'Pengembangan',
      jenis: 'PENGURUS_INTI',
    },
    {
      nama: 'Keorganisasian',
      jenis: 'BPH',
    },
    {
      nama: 'Kaderisasi',
      jenis: 'PENGURUS_INTI',
    },
    {
      nama: 'Sosial',
      jenis: 'BPH',
    },
  ];

  let idDivisi = 1;
  for (const divisi of division) {
    await prisma.divisi.upsert({
      where: { id: idDivisi },
      update: {},
      create: divisi as any,
    });
    idDivisi++;
  }

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

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let idAnggota = 1;
  for (const anggota of anggotas) {
    const randomDivisionId = getRandomInt(1, 4);
    await prisma.anggota.upsert({
      where: { id: idAnggota },
      update: {},
      create: {
        ...anggota,
        divisiId: randomDivisionId,
      },
    });
    idAnggota++;
  }

  const mentors = [
    {
      nama: 'Udin',
      fakultas: 'Fakultas Teknik',
      jurusan: 'Teknik Informatika',
      angkatan: 2019,
    },
    {
      nama: 'Joko',
      fakultas: 'Fakultas Ekonomi',
      jurusan: 'Manajemen',
      angkatan: 2020,
    },
    {
      nama: 'Siti',
      fakultas: 'Fakultas Psikologi',
      jurusan: 'Psikologi',
      angkatan: 2018,
    },
    {
      nama: 'Rina',
      fakultas: 'Fakultas Hukum',
      jurusan: 'Ilmu Hukum',
      angkatan: 2021,
    },
    {
      nama: 'Budi',
      fakultas: 'Fakultas Ilmu Sosial dan Ilmu Politik',
      jurusan: 'Ilmu Administrasi Negara',
      angkatan: 2017,
    },
    {
      nama: 'Wati',
      fakultas: 'Fakultas Farmasi',
      jurusan: 'Farmasi',
      angkatan: 2019,
    },
  ];

  let idMentor = 1;
  for (const mentor of mentors) {
    await prisma.mentor.upsert({
      where: { id: idMentor },
      update: {},
      create: mentor,
    });
    idMentor++;
  }

  const mentees = [
    {
      nama: 'Andi',
      fakultas: 'Fakultas Kedokteran',
      jurusan: 'Kedokteran Umum',
      angkatan: 2022,
      jalurMasuk: JalurMasukType.SNMPTN,
    },
    {
      nama: 'Lina',
      fakultas: 'Fakultas Ilmu Komunikasi',
      jurusan: 'Ilmu Komunikasi',
      angkatan: 2020,
      jalurMasuk: JalurMasukType.PRESTASI,
    },
    {
      nama: 'Rudi',
      fakultas: 'Fakultas Pertanian',
      jurusan: 'Agroteknologi',
      angkatan: 2018,
      jalurMasuk: JalurMasukType.SBMPTN,
    },
    {
      nama: 'Dina',
      fakultas: 'Fakultas Teknik',
      jurusan: 'Teknik Sipil',
      angkatan: 2021,
      jalurMasuk: JalurMasukType.SBMPTN,
    },
    {
      nama: 'Rudi',
      fakultas: 'Fakultas Ekonomi',
      jurusan: 'Akuntansi',
      angkatan: 2019,
      jalurMasuk: JalurMasukType.TALENT_SCOUTING,
    },
    {
      nama: 'Siti',
      fakultas: 'Fakultas Ilmu Sosial dan Ilmu Politik',
      jurusan: 'Hubungan Internasional',
      angkatan: 2020,
      jalurMasuk: JalurMasukType.SIMAK_UI,
    }
  ];

  let idMentee = 1;
  for (const mentee of mentees) {
    await prisma.mentee.upsert({
      where: { id: idMentee },
      update: {},
      create: mentee,
    });
    idMentee++;
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
