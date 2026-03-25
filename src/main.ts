import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita validação global via class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('CMP2305 - API NestJS')
    .setDescription('API RESTful para gerenciar Usuários, Perfis e Endereços')
    .setVersion('1.0')
    .addTag('profile', 'Operações relacionadas a Perfis')
    .addTag('user', 'Operações relacionadas a Usuários')
    .addTag('address', 'Operações relacionadas a Endereços')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log('🚀 Aplicação rodando em: http://localhost:3000');
  console.log('📚 Swagger disponível em: http://localhost:3000/api/docs');
}
bootstrap();
