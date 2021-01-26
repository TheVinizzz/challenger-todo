import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTodoTable1610959597487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable( new Table({
            name: 'listtodo',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: 'true',
                    isNullable: true
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('listtodo')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }

}
