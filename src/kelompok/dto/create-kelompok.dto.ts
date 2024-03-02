import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateKelompokDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  nomor: number;
}
