import { NestFactory } from '@nestjs/core';
import { LoggerErrorInterceptor, Logger as PinoLogger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { SanitizePipe } from './shared/pipes/sanitize.pipe';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(PinoLogger));

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalGuards(new JwtAuthGuard());
  app.useGlobalPipes(new SanitizePipe());
  await app.listen(3000);
}
bootstrap();
