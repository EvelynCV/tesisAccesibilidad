import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('norma')
export class DiscapacidadEntity {
    @PrimaryGeneratedColumn({
        name: 'id_nor',
    })
    id_dis: number;

    @Column({
        name: 'nom_nor',
        type: 'varchar',
        length: 20,
    })
    nom_dis: string;

}

