import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemonUser1629003514510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"pokemon_user",
            columns: [
                {
                    name:"id",
                    type:"bigint",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:"increment"
                },
                {
                    name:"user_id",
                    type:"bigint"
                },
                {
                    name:"pokemon_id",
                    type:"bigint"
                }
            ],
            foreignKeys:[
                {
                    name:"FKUserIdPokemon",
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    columnNames:["user_id"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                },
                {
                    name:"FKPokemonIdPokemon",
                    referencedTableName:"pokemons",
                    referencedColumnNames:["id"],
                    columnNames:["pokemon_id"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemon_user");
    }

}
