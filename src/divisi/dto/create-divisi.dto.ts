import { ApiProperty } from '@nestjs/swagger';
import { DivisiType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateDivisiDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  nama: string;

  @IsEnum(DivisiType)
  @IsNotEmpty()
  @ApiProperty()
  jenis: DivisiType;
}
