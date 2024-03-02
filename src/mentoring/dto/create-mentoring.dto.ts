import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMentoringDto {
  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  waktu: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  tempat: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty()
  materi: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  kelompokId: number;
}
