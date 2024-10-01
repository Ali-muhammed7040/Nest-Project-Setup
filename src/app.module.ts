import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './typeorm/orm.config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   expandVariables: true,
    // }),
    // LoggerModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: createLoggerOptions,
    // }),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class AppModule {}
