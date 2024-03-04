import { Injectable } from '@nestjs/common';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnggotaType } from '@prisma/client';

@Injectable()
export class AnggotaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAnggotaDto: CreateAnggotaDto) {
    return this.prisma.anggota.create({
      data: createAnggotaDto,
      include: { divisi: true },
    });
  }

  findAll(type: string, divisiId: number) {
    if (type && divisiId) {
      return this.prisma.anggota.findMany({
        where: {
          divisiId: divisiId,
          jenis: type as AnggotaType,
        },
        include: {
          divisi: true,
        },
      });
    }
    if (type && !divisiId) {
      return this.findAllByType(type);
    }
    if (!type && divisiId) {
      return this.findAllByDivisiId(divisiId);
    }
    return this.prisma.anggota.findMany({
      include: {
        divisi: true,
      },
    });
  }

  findAllByType(nama: string) {
    return this.prisma.anggota.findMany({
      where: {
        jenis: nama as AnggotaType,
      },
      include: {
        divisi: true,
      },
    });
  }

  findAllByDivisiId(id: number) {
    return this.prisma.anggota.findMany({
      where: {
        divisiId: id,
      },
      include: {
        divisi: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.anggota.findUnique({ where: { id: id } });
  }

  update(id: number, updateAnggotaDto: UpdateAnggotaDto) {
    return this.prisma.anggota.update({
      where: { id },
      data: updateAnggotaDto,
      include: { divisi: true },
    });
  }

  remove(id: number) {
    return this.prisma.anggota.delete({
      where: { id },
      include: { divisi: true },
    });
  }
}
