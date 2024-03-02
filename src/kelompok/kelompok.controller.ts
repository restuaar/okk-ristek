import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { KelompokService } from './kelompok.service';
import { CreateKelompokDto } from './dto/create-kelompok.dto';
import { UpdateKelompokDto } from './dto/update-kelompok.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { KelompokEntities } from './entities/kelompok.entity';

@ApiTags('kelompokOKK')
@Controller('kelompok')
export class KelompokController {
  constructor(private readonly kelompokService: KelompokService) {}

  @Post()
  @ApiCreatedResponse({ type: KelompokEntities })
  create(@Body() createKelompokDto: CreateKelompokDto) {
    return this.kelompokService.create(createKelompokDto);
  }

  @Get()
  @ApiOkResponse({ type: KelompokEntities, isArray: true })
  findAll() {
    return this.kelompokService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: KelompokEntities })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const kelompok = await this.kelompokService.findOne(id);
    if (!kelompok) {
      throw new NotFoundException(`Kelompok with id ${id} does not exist.`);
    }
    return kelompok;
  }

  @Patch(':id')
  @ApiOkResponse({ type: KelompokEntities })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKelompokDto: UpdateKelompokDto,
  ) {
    return this.kelompokService.update(id, updateKelompokDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: KelompokEntities })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.kelompokService.remove(id);
  }
}
