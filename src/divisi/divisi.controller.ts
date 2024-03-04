import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { DivisiService } from './divisi.service';
import { CreateDivisiDto } from './dto/create-divisi.dto';
import { UpdateDivisiDto } from './dto/update-divisi.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { DivisiEntities } from './entities/divisi.entity';
import { QueryDivisiDto } from './dto/query-divisi.dto';

@ApiTags('divisi')
@Controller('divisi')
export class DivisiController {
  constructor(private readonly divisiService: DivisiService) {}

  @Post()
  @ApiOperation({ summary: 'Create Divisi' })
  @ApiCreatedResponse({ type: DivisiEntities })
  async create(@Body() createDivisiDto: CreateDivisiDto) {
    return new DivisiEntities(await this.divisiService.create(createDivisiDto));
  }

  @Get()
  @ApiOperation({ summary: 'Get All Divisi' })
  @ApiQuery({ name: 'withAnggota', required: false, type: Boolean })
  @ApiQuery({ name: 'withPemimpin', required: false, type: Boolean })
  @ApiOkResponse({ type: DivisiEntities, isArray: true })
  async findAll(
    @Query() query: QueryDivisiDto = { withAnggota: true, withPemimpin: true },
  ) {
    const allDivisi = await this.divisiService.findAll(
      query.withAnggota,
      query.withPemimpin,
    );
    return allDivisi.map((divisi) => new DivisiEntities(divisi));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Divisi By Id' })
  @ApiOkResponse({ type: DivisiEntities })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const divisi = await this.divisiService.findOne(id);
    if (!divisi) {
      throw new NotFoundException(`Divisi with id ${id} does not exist.`);
    }
    return new DivisiEntities(divisi);
  }

  @Get('byname/:name')
  @ApiOperation({ summary: 'Get Divisi By Name' })
  @ApiOkResponse({ type: DivisiEntities })
  async findByName(@Param('name') name: string) {
    name = decodeURI(name);
    const divisi = await this.divisiService.findByName(name);
    if (divisi) {
      throw new NotFoundException(`Divisi with name ${name} does not exist.`);
    }
    return new DivisiEntities(divisi);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Divisi' })
  @ApiOkResponse({ type: DivisiEntities })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDivisiDto: UpdateDivisiDto,
  ) {
    return new DivisiEntities(
      await this.divisiService.update(id, updateDivisiDto),
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Divisi' })
  @ApiOkResponse({ type: DivisiEntities })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DivisiEntities(await this.divisiService.remove(id));
  }
}
