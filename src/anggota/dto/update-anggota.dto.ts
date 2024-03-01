import { PartialType } from '@nestjs/swagger';
import { CreateAnggotaDto } from './create-anggota.dto';

export class UpdateAnggotaDto extends PartialType(CreateAnggotaDto) {}
