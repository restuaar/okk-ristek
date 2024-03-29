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
  Query,
} from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AnggotaEntities } from './entities/anggota.entity';
import { QueryAnggotaDto } from './dto/query-anggota.dto';

@ApiTags('anggota')
@Controller('anggota')
export class AnggotaController {
  constructor(private readonly anggotaService: AnggotaService) {}

  @Post()
  @ApiOperation({ summary: 'Create Anggota' })
  @ApiCreatedResponse({ type: AnggotaEntities })
  async create(@Body() createAnggotaDto: CreateAnggotaDto) {
    return new AnggotaEntities(
      await this.anggotaService.create(createAnggotaDto),
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get All Anggota' })
  @ApiQuery({ name: 'type', required: false, type: 'AnggotaType' })
  @ApiQuery({ name: 'divisiId', required: false, type: Number })
  @ApiOkResponse({ type: AnggotaEntities, isArray: true })
  async findAll(@Query() query: QueryAnggotaDto) {
    const anggotaAll = await this.anggotaService.findAll(
      query.type,
      query.divisiId,
    );
    return anggotaAll.map((anggota) => new AnggotaEntities(anggota));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Anggota By Id' })
  @ApiOkResponse({ type: AnggotaEntities })
  @ApiParam({ name: 'id', type: Number })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneAnggota(id);
  }

  async findOneAnggota(id: number) {
    const anggota = await this.anggotaService.findOne(id);
    if (!anggota) {
      throw new NotFoundException(`Anggota with id ${id} does not exist.`);
    }
    return anggota;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Anggota' })
  @ApiOkResponse({ type: AnggotaEntities })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnggotaDto: UpdateAnggotaDto,
  ) {
    await this.findOneAnggota(id);
    return this.anggotaService.update(id, updateAnggotaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Anggota' })
  @ApiOkResponse({ type: AnggotaEntities })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.findOneAnggota(id);
    return this.anggotaService.remove(id);
  }
}
