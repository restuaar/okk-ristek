import { ApiProperty } from '@nestjs/swagger';
import { DivisiType, Divisi } from '@prisma/client';

export class DivisiEntities implements Divisi {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nama: string;

  @ApiProperty()
  jenis: DivisiType;
}
