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
import { MentorService } from './mentor.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MentorEntities } from './entities/mentor.entity';

@ApiTags('mentor')
@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Post()
  @ApiCreatedResponse({ type: MentorEntities })
  create(@Body() createMentorDto: CreateMentorDto) {
    return this.mentorService.create(createMentorDto);
  }

  @Get()
  @ApiOkResponse({ type: MentorEntities, isArray: true })
  findAll() {
    return this.mentorService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MentorEntities })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const mentor = await this.mentorService.findOne(id);
    if (!mentor) {
      throw new NotFoundException(`Mentor with id ${id} does not exist.`);
    }
    return mentor;
  }

  @Patch(':id')
  @ApiOkResponse({ type: MentorEntities })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMentorDto: UpdateMentorDto,
  ) {
    return this.mentorService.update(id, updateMentorDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MentorEntities })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mentorService.remove(id);
  }
}
