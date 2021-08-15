import { User } from './User';
import { Pokemon } from './Pokemon';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon_user")
export class PokemonUser{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"pokemon_id"})
    pokemonId:number;

    @Column({name:"user_id"})
    userId:number;

    @ManyToOne(()=>Pokemon)
    @JoinColumn({name:"pokemon_id"})
    pokemon:Pokemon;

    @ManyToOne(()=>User) 
    @JoinColumn({name:"user_id"})
    user:User;

}