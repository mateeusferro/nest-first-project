import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpendingsService } from './spendings.service';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { Spending } from './entities/spending.entity';

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
  async findAll() {
    return this.spendingsService.findAll();
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
