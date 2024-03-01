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
} from '@nestjs/common';
import { DivisiService } from './divisi.service';
import { CreateDivisiDto } from './dto/create-divisi.dto';
import { UpdateDivisiDto } from './dto/update-divisi.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { DivisiEntities } from './entities/divisi.entity';

@ApiTags('divisi')
@Controller('divisi')
export class DivisiController {
  constructor(private readonly divisiService: DivisiService) {}

  @Post()
  @ApiCreatedResponse({ type: DivisiEntities })
  create(@Body() createDivisiDto: CreateDivisiDto) {
    return this.divisiService.create(createDivisiDto);
  }

  @Get()
  @ApiQuery({ name: 'anggota', required: false, type: Boolean })
  @ApiOkResponse({ type: DivisiEntities, isArray: true })
  findAll(@Query() query: { anggota: string }) {
    const isAnggota = query.anggota === 'true';
    return this.divisiService.findAll(isAnggota);
  }

  @Get(':id')
  @ApiOkResponse({ type: DivisiEntities })
  @ApiQuery({ name: 'anggota', required: false, type: Boolean })
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: { anggota: string },
  ) {
    const isAnggota = query.anggota === 'true';
    return this.divisiService.findOne(+id, isAnggota);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DivisiEntities })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDivisiDto: UpdateDivisiDto,
  ) {
    return this.divisiService.update(id, updateDivisiDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DivisiEntities })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.divisiService.remove(+id);
  }
}
