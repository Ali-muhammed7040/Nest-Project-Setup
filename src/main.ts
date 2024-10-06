import { NestFactory } from '@nestjs/core';
import { LoggerErrorInterceptor, Logger as PinoLogger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(PinoLogger));

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  // app.useGlobalGuards(new JwtAuthGuard());
  // app.useGlobalPipes(new SanitizePipe());
  await app.listen(3000);
}
bootstrap();
