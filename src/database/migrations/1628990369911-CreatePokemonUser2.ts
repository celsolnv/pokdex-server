import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePokemonUser21628990369911 implements MigrationInterface {
    name = 'CreatePokemonUser21628990369911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon_user" ("id" SERIAL NOT NULL, CONSTRAINT "PK_e50dc6725d377615fcc556ecfe7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon_user_pokemon_pokemons" ("pokemonUserId" integer NOT NULL, "pokemonsId" integer NOT NULL, CONSTRAINT "PK_cc6c8575a152d8787bb4737e3bb" PRIMARY KEY ("pokemonUserId", "pokemonsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4512e0e2e736da6a8b80dc2b01" ON "pokemon_user_pokemon_pokemons" ("pokemonUserId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ce594d596d8773e8d1c59110e8" ON "pokemon_user_pokemon_pokemons" ("pokemonsId") `);
        await queryRunner.query(`CREATE TABLE "pokemon_user_user_users" ("pokemonUserId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_e47f79179ef7426b87522817b09" PRIMARY KEY ("pokemonUserId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_81d63764134d34e185cdabec89" ON "pokemon_user_user_users" ("pokemonUserId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c2f4a5d68235415c73e6e63316" ON "pokemon_user_user_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "height" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "baseExp"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "baseExp" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_pokemon_pokemons" ADD CONSTRAINT "FK_4512e0e2e736da6a8b80dc2b019" FOREIGN KEY ("pokemonUserId") REFERENCES "pokemon_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_pokemon_pokemons" ADD CONSTRAINT "FK_ce594d596d8773e8d1c59110e83" FOREIGN KEY ("pokemonsId") REFERENCES "pokemons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_user_users" ADD CONSTRAINT "FK_81d63764134d34e185cdabec89b" FOREIGN KEY ("pokemonUserId") REFERENCES "pokemon_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_user_users" ADD CONSTRAINT "FK_c2f4a5d68235415c73e6e633164" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon_user_user_users" DROP CONSTRAINT "FK_c2f4a5d68235415c73e6e633164"`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_user_users" DROP CONSTRAINT "FK_81d63764134d34e185cdabec89b"`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_pokemon_pokemons" DROP CONSTRAINT "FK_ce594d596d8773e8d1c59110e83"`);
        await queryRunner.query(`ALTER TABLE "pokemon_user_pokemon_pokemons" DROP CONSTRAINT "FK_4512e0e2e736da6a8b80dc2b019"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "baseExp"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "baseExp" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "height" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "weight" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "number" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemons" ADD CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "IDX_c2f4a5d68235415c73e6e63316"`);
        await queryRunner.query(`DROP INDEX "IDX_81d63764134d34e185cdabec89"`);
        await queryRunner.query(`DROP TABLE "pokemon_user_user_users"`);
        await queryRunner.query(`DROP INDEX "IDX_ce594d596d8773e8d1c59110e8"`);
        await queryRunner.query(`DROP INDEX "IDX_4512e0e2e736da6a8b80dc2b01"`);
        await queryRunner.query(`DROP TABLE "pokemon_user_pokemon_pokemons"`);
        await queryRunner.query(`DROP TABLE "pokemon_user"`);
    }

}
