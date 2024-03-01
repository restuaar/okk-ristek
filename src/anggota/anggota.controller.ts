import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AnggotaEntities } from './entities/anggota.entity';

@ApiTags('anggota')
@Controller('anggota')
export class AnggotaController {
  constructor(private readonly anggotaService: AnggotaService) {}

  @Post()
  @ApiCreatedResponse({ type: AnggotaEntities })
  create(@Body() createAnggotaDto: CreateAnggotaDto) {
    return this.anggotaService.create(createAnggotaDto);
  }

  @Get()
  @ApiOkResponse({ type: AnggotaEntities, isArray: true })
  findAll() {
    return this.anggotaService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AnggotaEntities })
  findOne(@Param('id') id: string) {
    return this.anggotaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AnggotaEntities })
  update(@Param('id') id: string, @Body() updateAnggotaDto: UpdateAnggotaDto) {
    return this.anggotaService.update(+id, updateAnggotaDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnggotaEntities })
  remove(@Param('id') id: string) {
    return this.anggotaService.remove(+id);
  }
}
