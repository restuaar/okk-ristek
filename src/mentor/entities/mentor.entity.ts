import { ApiProperty } from '@nestjs/swagger';
import { Mentor } from '@prisma/client';

export class MentorEntities implements Mentor {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nama: string;

  @ApiProperty()
  fakultas: string;

  @ApiProperty()
  jurusan: string;

  @ApiProperty()
  angkatan: number;
}
