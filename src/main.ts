import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
// import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.setGlobalPrefix(process.env.API_PREFIX || '');

  if (!process.env.SWAGGER_ENABLE || process.env.SWAGGER_ENABLE === 'true') {
    createSwagger(app);
  }

  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();

function createSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('OKK-Ristek API')
    .setDescription('Tugas Open Recruitment OKK Ristek Fasilkom UI 2024')
    .setVersion(process.env.VERSION || '1.0')
    .setBasePath(process.env.API_PREFIX || '')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
