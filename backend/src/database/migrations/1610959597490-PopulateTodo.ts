import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateTodo1610959597490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO listtodo (title, description) VALUES ('Welcome', 'Welcome to my challenger')",
    );
    await queryRunner.query(
      "INSERT INTO listtodo (title, description) VALUES ('Facil de usar', 'Vamos testar')",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM listtodo WHERE title = 'Facil de usar'",
    );
    await queryRunner.query(
      "DELETE FROM listtodo WHERE title = 'Welcome'",
    );
  }
}
