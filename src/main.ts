import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  const config = new DocumentBuilder()
    .setTitle('Emurgo High level API from Aashish')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('emurgo/apiDoc', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
