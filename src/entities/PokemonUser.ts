import { User } from './User';
import { Pokemon } from './Pokemon';
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon_user_user_users")
export class PokemonUser{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToMany(()=>Pokemon)
    @JoinTable()
    pokemon:Pokemon;

    @ManyToMany(()=>User)
    @JoinTable()
    user:User;
}