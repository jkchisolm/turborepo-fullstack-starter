import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './utils/auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Express app for auth middleware is initialized below
  // Definitely NOT the best pattern but we move
  const authMiddleware = express();
  authMiddleware.all('/api/auth/*splat', toNodeHandler(auth));

  app.use(authMiddleware);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
