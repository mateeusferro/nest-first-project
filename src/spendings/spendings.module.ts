import { forwardRef, Module } from '@nestjs/common';
import { SpendingsService } from './spendings.service';
import { SpendingsController } from './spendings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spending } from './entities/spending.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spending])],
  controllers: [SpendingsController],
  providers: [SpendingsService],
})
export class SpendingsModule {}
