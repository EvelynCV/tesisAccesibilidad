import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('institucion')
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