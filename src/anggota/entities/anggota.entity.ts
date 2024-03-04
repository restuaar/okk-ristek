import { ApiProperty } from '@nestjs/swagger';
import { AnggotaType, Divisi } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class AnggotaEntities {
  constructor(partial: Partial<AnggotaEntities>) {
    Object.assign(this, partial);
  }

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

  @Exclude()
  divisiId: number;

  @ApiProperty({ required: false, nullable: true })
  jenis?: AnggotaType | null;

  @ApiProperty({ required: false})
  divisi: Divisi;
}
