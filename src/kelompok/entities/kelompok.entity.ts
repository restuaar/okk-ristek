import { ApiProperty } from "@nestjs/swagger";
import { KelompokOKK } from "@prisma/client";

export class KelompokEntities implements KelompokOKK {

  @ApiProperty()
  id: number;

  @ApiProperty()
  nomor: number;
}
