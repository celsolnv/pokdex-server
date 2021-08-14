import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    email:string;

    @Column()
    password:string;

}