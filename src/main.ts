import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger as PinoLogger, LoggerErrorInterceptor } from 'nestjs-pino';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SanitizePipe } from './shared/pipes/sanitize.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(PinoLogger));

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalGuards(new JwtAuthGuard());
  app.useGlobalPipes(new SanitizePipe());
  await app.listen(3000);
}
bootstrap();
