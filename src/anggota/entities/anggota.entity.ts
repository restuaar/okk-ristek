import { ApiProperty } from '@nestjs/swagger';
import { AnggotaType } from '@prisma/client';

export class AnggotaEntities {
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

  @ApiProperty({ required: false })
  jenis?: AnggotaType;

  @ApiProperty({ required: false, nullable: true })
  divisiId: number | null;
}
