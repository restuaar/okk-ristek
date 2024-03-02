import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnggotaModule } from './anggota/anggota.module';
import { DivisiModule } from './divisi/divisi.module';
import { MentorModule } from './mentor/mentor.module';
import { MenteeModule } from './mentee/mentee.module';
import { KelompokModule } from './kelompok/kelompok.module';
import { MentoringModule } from './mentoring/mentoring.module';

@Module({
  imports: [PrismaModule, AnggotaModule, DivisiModule, MentorModule, MenteeModule, KelompokModule, MentoringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
