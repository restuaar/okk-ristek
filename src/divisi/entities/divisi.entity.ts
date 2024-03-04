import { ApiProperty } from '@nestjs/swagger';
import { Anggota, Divisi, DivisiType } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class DivisiEntities implements Divisi {
  constructor(partial: Partial<DivisiEntities>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  nama: string;

  @ApiProperty()
  jenis: DivisiType;

  @ApiProperty()
  pj: Anggota;
  @Exclude()
  pjId: number;

  @ApiProperty()
  waPj: Anggota;
  @Exclude()
  waPjId: number;

  @ApiProperty()
  waPj2: Anggota;
  @Exclude()
  waPj2Id: number;

  @ApiProperty()
  anggota: Anggota[];
}
