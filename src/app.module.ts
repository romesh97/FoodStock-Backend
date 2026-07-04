import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('db.host'),
        port: +config.get('db.port'),
        username: config.get('db.username'),
        password: config.get('db.password'),
        database: config.get('db.database'),
        autoLoadEntities: true,
        synchronize: true,
        extra: {
          timezone: 'UTC',
        },
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {}
