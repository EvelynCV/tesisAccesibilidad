import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('institucion_2')
export class InstitucionEntity {
    @PrimaryGeneratedColumn({
        name: 'id_ins',
    })
    idIns: number;

    @Column({
        name: 'nom_ins',
        type: 'varchar',
        length: 100,
    })
    nomIns: string;

}