import { Injectable } from '@nestjs/common';
import { CreateMentoringDto } from './dto/create-mentoring.dto';
import { UpdateMentoringDto } from './dto/update-mentoring.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddKehadiranDto } from './dto/add-kehadiran.dto';

@Injectable()
export class MentoringService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMentoringDto: CreateMentoringDto) {
    return this.prisma.jadwalMentoring.create({ data: createMentoringDto });
  }

  findAll() {
    return this.prisma.jadwalMentoring.findMany({
      include: { kehadiran: true },
    });
  }

  findOne(id: number) {
    return this.prisma.jadwalMentoring.findUnique({ where: { id: id } });
  }

  update(id: number, updateMentoringDto: UpdateMentoringDto) {
    return this.prisma.jadwalMentoring.update({
      where: { id },
      data: updateMentoringDto,
    });
  }

  remove(id: number) {
    return this.prisma.jadwalMentoring.delete({ where: { id } });
  }

  addKehadiran(id: number, menteeId: AddKehadiranDto) {
    return this.prisma.jadwalMentoring.update({
      where: { id },
      data: {
        kehadiran: {
          connect: { id: menteeId.menteeId },
        },
      },
    });
  }
}
