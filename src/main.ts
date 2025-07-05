import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const docConfig = new DocumentBuilder()
    .setTitle('PT bayer munich')
    .setDescription('ahmad fadil & ade budi setiawan')
    .setVersion('1.0')

    .setDescription('ahmad fadill & ade budi setiawann')
    .setVersion('233657201002')

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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
