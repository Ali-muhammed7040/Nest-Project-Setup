import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { TestModule } from './modules/test';
import { dataSourceOptions } from './typeorm/orm.config';
import { createLoggerOptions } from './shared/factories';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user/user.module';

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
    UserModule,
  ],
})
export class AppModule {}
