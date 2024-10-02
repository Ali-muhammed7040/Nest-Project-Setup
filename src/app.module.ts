import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { TestModule } from './modules/test';
import { dataSourceOptions } from './typeorm/orm.config';
import { createLoggerOptions } from './shared/factories';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createLoggerOptions,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TestModule,
    AuthModule,
  ],
})
export class AppModule {}
