import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUsers1650735101636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Users (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(250) NOT NULL,
            photo VARCHAR(250) NOT NULL,
            lastMessage VARCHAR(250) NOT NULL,
            createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
            deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Users
        `);
    }

}
