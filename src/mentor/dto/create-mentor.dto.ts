import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateMentorDto {
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
  @ApiProperty()
  angkatan: number;
}
