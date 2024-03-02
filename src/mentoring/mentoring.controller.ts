import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MentoringService } from './mentoring.service';
import { CreateMentoringDto } from './dto/create-mentoring.dto';
import { UpdateMentoringDto } from './dto/update-mentoring.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MentoringEntities } from './entities/mentoring.entity';
import { AddKehadiranDto } from './dto/add-kehadiran.dto';

@ApiTags('mentoring')
@Controller('mentoring')
export class MentoringController {
  constructor(private readonly mentoringService: MentoringService) {}

  @Post()
  @ApiCreatedResponse({ type: MentoringEntities })
  create(@Body() createMentoringDto: CreateMentoringDto) {
    return this.mentoringService.create(createMentoringDto);
  }

  @Get()
  @ApiOkResponse({ type: MentoringEntities, isArray: true })
  findAll() {
    return this.mentoringService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MentoringEntities })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mentoringService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MentoringEntities })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMentoringDto: UpdateMentoringDto,
  ) {
    return this.mentoringService.update(id, updateMentoringDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MentoringEntities })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mentoringService.remove(id);
  }

  @Post(':id/mentee')
  @ApiOkResponse({ type: MentoringEntities })
  addKehadiran(
    @Param('id', ParseIntPipe) id: number,
    @Body() menteeId: AddKehadiranDto,
  ) {
    return this.mentoringService.addKehadiran(id, menteeId);
  }
}
