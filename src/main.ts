import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const docConfig = new DocumentBuilder()
    .setTitle('CRM Praktek') // Nama Kalian
    .setDescription('API untuk Praktek Pelanggan') //NIM Kalian
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter Access Token',
        in: 'header',
      },
      'access_token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('dokumentasi', app, document);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
