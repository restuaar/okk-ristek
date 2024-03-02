import { Injectable } from '@nestjs/common';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenteeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMenteeDto: CreateMenteeDto) {
    return this.prisma.mentee.create({ data: createMenteeDto });
  }

  findAll() {
    return this.prisma.mentee.findMany({});
  }

  findOne(id: number) {
    return this.prisma.mentee.findUnique({ where: { id: id } });
  }

  update(id: number, updateMenteeDto: UpdateMenteeDto) {
    return this.prisma.mentee.update({
      where: { id },
      data: updateMenteeDto,
    });
  }

  remove(id: number) {
    return this.prisma.mentee.delete({ where: { id } });
  }
}
