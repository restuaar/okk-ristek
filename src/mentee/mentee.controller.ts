import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MenteeService } from './mentee.service';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MenteeEntities } from './entities/mentee.entity';

@ApiTags('mentee')
@Controller('mentee')
export class MenteeController {
  constructor(private readonly menteeService: MenteeService) {}

  @Post()
  @ApiCreatedResponse({ type: MenteeEntities })
  create(@Body() createMenteeDto: CreateMenteeDto) {
    return this.menteeService.create(createMenteeDto);
  }

  @Get()
  @ApiOkResponse({ type: MenteeEntities, isArray: true })
  findAll() {
    return this.menteeService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MenteeEntities })
  async findOne(@Param('id') id: string) {
    const mentee = await this.menteeService.findOne(+id);
    if (!mentee) {
      throw new NotFoundException(`Mentee with id ${id} does not exist.`);
    }
    return mentee;
  }

  @Patch(':id')
  @ApiOkResponse({ type: MenteeEntities })
  update(@Param('id') id: string, @Body() updateMenteeDto: UpdateMenteeDto) {
    return this.menteeService.update(+id, updateMenteeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MenteeEntities })
  remove(@Param('id') id: string) {
    return this.menteeService.remove(+id);
  }
}
