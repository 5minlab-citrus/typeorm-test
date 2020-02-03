import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTestEntity1580738975059 implements MigrationInterface {
    name = 'AddTestEntity1580738975059'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `test` (`id` int NOT NULL AUTO_INCREMENT, `receivedAt` datetime NULL DEFAULT null, `online` tinyint NULL DEFAULT null, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `test`", undefined);
    }

}
