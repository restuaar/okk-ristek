import { Injectable } from '@nestjs/common';
import { CreateKelompokDto } from './dto/create-kelompok.dto';
import { UpdateKelompokDto } from './dto/update-kelompok.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KelompokService {
  constructor(private readonly prisma: PrismaService) {}

  create(createKelompokDto: CreateKelompokDto) {
    return this.prisma.kelompokOKK.create({ data: createKelompokDto });
  }

  findAll() {
    return this.prisma.kelompokOKK.findMany({
      include: { mentor: true, mentees: true },
    });
  }

  findOne(id: number) {
    return this.prisma.kelompokOKK.findUnique({
      where: { id: id },
      include: { mentor: true, mentees: true },
    });
  }

  update(id: number, updateKelompokDto: UpdateKelompokDto) {
    return this.prisma.kelompokOKK.update({
      where: { id },
      data: updateKelompokDto,
      include: { mentor: true, mentees: true },
    });
  }

  remove(id: number) {
    return this.prisma.kelompokOKK.delete({
      where: { id },
      include: { mentor: true, mentees: true },
    });
  }
}
