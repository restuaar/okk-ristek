import { Injectable } from '@nestjs/common';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MentorService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMentorDto: CreateMentorDto) {
    return this.prisma.mentor.create({ data: createMentorDto });
  }

  findAll() {
    return this.prisma.mentor.findMany({});
  }

  findOne(id: number) {
    return this.prisma.mentor.findUnique({ where: { id: id } });
  }

  update(id: number, updateMentorDto: UpdateMentorDto) {
    return this.prisma.mentor.update({
      where: { id },
      data: updateMentorDto,
    });
  }

  remove(id: number) {
    return this.prisma.anggota.delete({ where: { id } });
  }
}
