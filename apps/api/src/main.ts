import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Express app for auth middleware is initialized below
  // Definitely NOT the best pattern but we move
  const auth = express();
  auth.all('/api/auth/*splat');

  app.use(auth);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
