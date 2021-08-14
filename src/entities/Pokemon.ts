import { User } from './User';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemons")
export class Pokemon{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    number:number;

    @Column()
    image:string;

    @Column()
    weight:number;

    @Column()
    height:number;

    @Column()
    baseExp:number;

    @Column()
    description:string;

}