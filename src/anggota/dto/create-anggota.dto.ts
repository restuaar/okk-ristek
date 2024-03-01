import { ApiProperty } from '@nestjs/swagger';
import { AnggotaType } from '@prisma/client';

export class CreateAnggotaDto {
  @ApiProperty()
  nama: string;

  @ApiProperty()
  fakultas: string;

  @ApiProperty()
  jurusan: string;

  @ApiProperty()
  angkatan: number;

  @ApiProperty({ required: false })
  jenis?: AnggotaType;
}
