import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docConfig = new DocumentBuilder()
    .setTitle('PT Bayer Munich') // Judul dokumentasi
    .setDescription('Ahmad Fadil & Ade Budi Setiawan - 233657201002') // Deskripsi & NIM
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
  SwaggerModule.setup('/dokumentasi', app, document);

  await app.listen(process.env.PORT ?? 3000); // Gunakan PORT dari .env atau default 3000
}
bootstrap();
