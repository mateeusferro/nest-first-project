import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableSpending1720481486942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE spendings (
                id VARCHAR(50) PRIMARY KEY,
                description VARCHAR(255) NOT NULL,
                total DECIMAL(5, 2) NOT NULL,
                date DATE NOT NULL,
                category ENUM('Food', 'Transport', 'Health', 'Entertainment',
                'Education', 'Housing', 'Clothing', 'Other') NOT NULL
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
