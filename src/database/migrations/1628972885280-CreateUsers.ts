import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1628972885280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name:"id",
                    type:"bigint",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:"increment"
                },
                {
                    name:"email",
                    type:"varchar"
                },
                {
                    name:"password",
                    type:"varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
