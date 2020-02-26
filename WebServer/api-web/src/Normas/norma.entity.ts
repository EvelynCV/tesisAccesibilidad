import {Column, Entity, PrimaryGeneratedColumn, many} from 'typeorm';

@Entity('norma')
export class NormaEntity {
    @PrimaryGeneratedColumn({
        name: 'id_nor',
    })
    id_nor: number;

    @Column({
        name: 'nom_nor',
        type: 'varchar',
        length: 200,
    })
    nom_nor: string;

}


import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(type => User, user => user.photos)
    user: User;

}