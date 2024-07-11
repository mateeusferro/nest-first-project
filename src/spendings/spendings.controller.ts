import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SpendingsService } from './spendings.service';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { Spending } from './entities/spending.entity';
import { Pagination } from 'src/dtos/pagination.dto';
import { SpendQuery } from 'src/dtos/spend-query.dto';

@Controller('spendings')
export class SpendingsController {
  constructor(private readonly spendingsService: SpendingsService) {}

  @Post()
  async create(
    @Body() createSpendingDto: CreateSpendingDto,
  ): Promise<Spending> {
    return this.spendingsService.create(createSpendingDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number = 0,
    @Query('size') size: number = 10,
  ): Promise<Pagination<Spending[]>> {
    return this.spendingsService.findAll(page, size);
  }

  @Get('per-category')
  async spendingsPerCategory(): Promise<SpendQuery[]> {
    return this.spendingsService.spendsPerCategory();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Spending> {
    return this.spendingsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSpendingDto: UpdateSpendingDto,
  ): Promise<UpdateSpendingDto> {
    return this.spendingsService.update(id, updateSpendingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.spendingsService.remove(id);
  }
}
