import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';

import {InstitucionEntity} from "../Institucion/institucion.entity";

@Entity('formulario')
export class FormularioEntity {
    @PrimaryGeneratedColumn({
        name: 'id_for',
    })
    id_for: number;

    @Column({
        name: 'fech_for',
        type: 'date',
    })
    fech_for: number;

    @OneToOne(type => InstitucionEntity)
    @JoinColumn()
    id_ins: InstitucionEntity;

}