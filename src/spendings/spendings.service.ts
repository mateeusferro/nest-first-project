import { Injectable } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Spending } from './entities/spending.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SpendingsService {
  constructor(
    @InjectRepository(Spending)
    private readonly spendingsRepository: Repository<Spending>,
  ) {}

  async create(createSpendingDto: CreateSpendingDto): Promise<Spending> {
    return this.spendingsRepository.save(createSpendingDto);
  }

  async findAll(): Promise<Spending[]> {
    return this.spendingsRepository.find();
  }

  async findOne(id: string): Promise<Spending> {
    return this.spendingsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateSpendingDto: UpdateSpendingDto,
  ): Promise<UpdateResult> {
    return this.spendingsRepository.update(id, updateSpendingDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.spendingsRepository.delete(id);
  }
}
