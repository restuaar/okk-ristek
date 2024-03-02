import { ApiProperty } from '@nestjs/swagger';
import { JalurMasukType, Mentee } from '@prisma/client';

export class MenteeEntities implements Mentee {
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

  @ApiProperty()
  kelompokId: number;

  @ApiProperty()
  jalurMasuk: JalurMasukType;
}
