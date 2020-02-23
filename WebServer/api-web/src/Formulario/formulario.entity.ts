import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';

import {InstitucionEntity} from "../Institucion/institucion.entity";

@Entity('formulario')
export class FormularioEntity {
    @PrimaryGeneratedColumn({
        name: 'id_for',
    })
    idFor: number;

    @Column({
        name: 'fecha_for',
        type: 'date',
    })
    fechFor: number;

    @OneToOne(type => InstitucionEntity)
    @JoinColumn()
    id_ins: InstitucionEntity;

}