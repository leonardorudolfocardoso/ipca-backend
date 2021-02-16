import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateIpcasTable1613436951635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: 'ipcas',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'date',
                    type: 'date',
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
        await queryRunner.dropTable('Ipcas');
    }

}
