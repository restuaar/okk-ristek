import { ApiProperty } from "@nestjs/swagger";
import { JalurMasukType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateMenteeDto {
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

  @IsEnum(JalurMasukType)
  @IsNotEmpty()
  @ApiProperty()
  jalurMasuk: JalurMasukType;
}
