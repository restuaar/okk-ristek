import { Injectable } from '@nestjs/common';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnggotaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAnggotaDto: CreateAnggotaDto) {
    return this.prisma.anggota.create({ data: createAnggotaDto });
  }

  findAll() {
    return this.prisma.anggota.findMany({});
  }

  findOne(id: number) {
    return this.prisma.anggota.findUnique({ where: { id: id } });
  }

  update(id: number, updateAnggotaDto: UpdateAnggotaDto) {
    return this.prisma.anggota.update({
      where: { id },
      data: updateAnggotaDto,
    });
  }

  remove(id: number) {
    return this.prisma.anggota.delete({ where: { id } });
  }
}
