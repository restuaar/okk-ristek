import { Injectable } from '@nestjs/common';
import { CreateDivisiDto } from './dto/create-divisi.dto';
import { UpdateDivisiDto } from './dto/update-divisi.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DivisiService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDivisiDto: CreateDivisiDto) {
    return this.prisma.divisi.create({
      data: createDivisiDto,
      include: { anggota: true, pj: true, waPj: true, waPj2: true },
    });
  }

  findAll(withAnggota: boolean, withPemimpin: boolean) {
    return this.prisma.divisi.findMany({ include: { anggota: withAnggota, pj: withPemimpin, waPj: withPemimpin, waPj2: withPemimpin} });
  }

  findOne(id: number) {
    return this.prisma.divisi.findUnique({
      where: { id },
      include: { anggota: true },
    });
  }

  findByName(name: string) {
    return this.prisma.divisi.findFirst({
      where: { nama: { contains: name, mode: 'insensitive' } },
      include: { anggota: true },
    });
  }

  update(id: number, updateDivisiDto: UpdateDivisiDto) {
    return this.prisma.divisi.update({ where: { id }, data: updateDivisiDto });
  }

  remove(id: number) {
    return this.prisma.divisi.delete({ where: { id } });
  }
}
