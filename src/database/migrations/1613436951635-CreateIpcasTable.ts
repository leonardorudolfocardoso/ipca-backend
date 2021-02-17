import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateIpcasTable1613436951635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: 'ipcas',
            columns: [
                {
                    name: 'date',
                    type: 'timestamp',
                    isPrimary: true,
                },
                {
                    name: 'year',
                    type: 'decimal'
                },
                {
                    name: 'month',
                    type: 'decimal',
                },
                {
                    name: 'value',
                    type: 'decimal',
                    precision: 5,
                    scale: 2,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ipcas');
    }

}
