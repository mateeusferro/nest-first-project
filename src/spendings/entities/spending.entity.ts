import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.dto";

@Entity({ name: 'spendings' })
export class Spending {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    description: string;

    @Column('decimal', { precision: 5, scale: 2 })
    total: number;

    @Column('date')
    date: Date;

    @Column({
        type: 'enum',
        enum: Category,
        default: Category.Other
    })
    category: Category;
}