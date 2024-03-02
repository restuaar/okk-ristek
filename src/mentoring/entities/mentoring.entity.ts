import { ApiProperty } from "@nestjs/swagger";
import { JadwalMentoring } from "@prisma/client";

export class MentoringEntities implements JadwalMentoring {
  @ApiProperty()
  id: number;

  @ApiProperty()
  waktu: Date;

  @ApiProperty()
  tempat: string;

  @ApiProperty()
  materi: string;

  @ApiProperty()
  kelompokId: number;
}
