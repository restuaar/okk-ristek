import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiParam({ name: 'id', type: Number })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const anggota = await this.anggotaService.findOne(id);
    if (!anggota) {
      throw new NotFoundException(`Anggota with id ${id} does not exist.`);
    }
    return anggota;
  }

  @Patch(':id')
  @ApiOkResponse({ type: AnggotaEntities })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnggotaDto: UpdateAnggotaDto,
  ) {
    return this.anggotaService.update(+id, updateAnggotaDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnggotaEntities })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.anggotaService.remove(+id);
  }
}
