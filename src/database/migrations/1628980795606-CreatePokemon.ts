import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemon1628980795606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"pokemons",
            columns: [
                {
                    name:"id",
                    type:"bigint",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:"increment"
                },
                {
                    name:"name",
                    type:"varchar"
                },
                {
                    name:"image",
                    type:"varchar"
                },
                {
                    name:"number",
                    type:"bigint"
                },
                {
                    name:"height",
                    type:"float"
                },
                {
                    name:"weight",
                    type:"float"
                },
                {
                    name:"description",
                    type:"varchar"
                },
                {
                    name:"baseExp",
                    type:"float"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemons")
    }

}
