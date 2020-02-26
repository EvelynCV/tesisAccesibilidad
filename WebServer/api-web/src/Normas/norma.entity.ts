import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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