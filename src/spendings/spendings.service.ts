import { Injectable } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Spending } from './entities/spending.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Pagination, Paging } from 'src/dtos/pagination.dto';
import { SpendQuery } from 'src/dtos/spend-query.dto';

@Injectable()
export class SpendingsService {
  constructor(
    @InjectRepository(Spending)
    private readonly spendingsRepository: Repository<Spending>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createSpendingDto: CreateSpendingDto): Promise<Spending> {
    return this.spendingsRepository.save(createSpendingDto);
  }

  async findAll(page: number, size: number): Promise<Pagination<Spending[]>> {
    const [spendings, total] = await this.spendingsRepository.findAndCount({
      take: size,
      skip: page * size,
    });

    return new Pagination(
      new Paging(Number(size), total, Math.ceil(total / size)),
      spendings,
    );
  }

  async findOne(id: string): Promise<Spending> {
    return this.spendingsRepository.findOneBy({ id });
  }

  async spendsPerCategory(): Promise<SpendQuery[]> {
    const query: any = await this.dataSource.query(`
      SELECT category, SUM(total) as total
      FROM spendings
      GROUP BY category
    `);

    return query.map(({ category, total }) => new SpendQuery(category, total));
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
