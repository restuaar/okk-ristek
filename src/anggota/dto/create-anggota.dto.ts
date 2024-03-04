import { ApiProperty } from '@nestjs/swagger';
import { AnggotaType } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateAnggotaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  fakultas: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  jurusan: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  angkatan: number;

  @IsOptional()
  @IsEnum(AnggotaType)
  @ApiProperty({ required: false })
  jenis?: AnggotaType;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  divisiId: number;
}
