import { AnggotaType } from "@prisma/client";
import { Transform } from "class-transformer";
import {
  IsEnum,
  IsNumber,
  IsOptional,
} from "class-validator";
import { toNumber} from "src/common/helper/cast.helper";


export class QueryDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public divisiId: number;

  @IsEnum(AnggotaType)
  @IsOptional()
  public type: AnggotaType;
}