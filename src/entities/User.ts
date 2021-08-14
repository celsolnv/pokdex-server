import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    name:string;

    @Column()
    password:string;

}