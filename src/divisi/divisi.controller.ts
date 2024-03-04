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
  create(@Body() createDivisiDto: CreateDivisiDto) {
    return this.divisiService.create(createDivisiDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Divisi' })
  @ApiQuery({ name: 'withAnggota', required: false, type: Boolean })
  @ApiOkResponse({ type: DivisiEntities, isArray: true })
  findAll(@Query() query: QueryDivisiDto = { withAnggota: true }) {
    return this.divisiService.findAll(query.withAnggota);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Divisi By Id' })
  @ApiOkResponse({ type: DivisiEntities })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const divisi = await this.divisiService.findOne(id);
    if (!divisi) {
      throw new NotFoundException(`Divisi with id ${id} does not exist.`);
    }
    return divisi;
  }

  @Get('byname/:name')
  @ApiOperation({ summary: 'Get Divisi By Name' })
  @ApiOkResponse({ type: DivisiEntities })
  async findByName(@Param('name') name: string) {
    name = decodeURI(name);
    const divisi = await this.divisiService.findByName(name);
    if (divisi.length === 0) {
      throw new NotFoundException(`Divisi with name ${name} does not exist.`);
    }
    return divisi[0];
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Divisi' })
  @ApiOkResponse({ type: DivisiEntities })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDivisiDto: UpdateDivisiDto,
  ) {
    return this.divisiService.update(id, updateDivisiDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Divisi' })
  @ApiOkResponse({ type: DivisiEntities })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.divisiService.remove(id);
  }
}
