import { Injectable } from '@nestjs/common';
import { CreateDivisiDto } from './dto/create-divisi.dto';
import { UpdateDivisiDto } from './dto/update-divisi.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DivisiService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDivisiDto: CreateDivisiDto) {
    return this.prisma.divisi.create({ data: createDivisiDto });
  }

  findAll(isAnggota: boolean) {
    return this.prisma.divisi.findMany({ include: { anggota: isAnggota } });
  }

  findOne(id: number, isAnggota: boolean) {
    return this.prisma.divisi.findUnique({
      where: { id },
      include: { anggota: isAnggota },
    });
  }

  update(id: number, updateDivisiDto: UpdateDivisiDto) {
    return this.prisma.divisi.update({ where: { id }, data: updateDivisiDto });
  }

  remove(id: number) {
    return this.prisma.divisi.delete({ where: { id } });
  }
}
