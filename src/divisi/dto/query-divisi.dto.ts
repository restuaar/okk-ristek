import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { toBoolean } from 'src/common/helper/cast.helper';

export class QueryDivisiDto {
  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  @IsOptional()
  public withAnggota: boolean = true;
}
