import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableMessages1650737158565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Messages(
            id INT PRIMARY KEY AUTO_INCREMENT,
            userId INT NOT NULL,
            text VARCHAR(250) NOT NULL,
            date VARCHAR(250) NOT NULL,
            fullTime VARCHAR(250) NOT NULL,
            messageFromApi VARCHAR(250),
            createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
            deletedAt TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES Users (id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Messages
        `);
    }

}
