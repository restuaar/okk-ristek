import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class AddKehadiranDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  menteeId: number;
}
