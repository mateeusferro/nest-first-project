import { Module } from '@nestjs/common';
import { SpendingsModule } from './spendings/spendings.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './config/database.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    SpendingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
