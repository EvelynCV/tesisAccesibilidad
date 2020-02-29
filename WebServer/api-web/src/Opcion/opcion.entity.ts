import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {DiscapacidadEntity} from "../Discapacidad/discapacidad.entity";
import {OpcpreEntity} from "../OpcPre/opcpre.entity";

@Entity('opcion')
export class OpcionEntity {
    @PrimaryGeneratedColumn({
        name: 'id_opc',
    })
    id_opc: number;

    @Column({
        name: 'nom_opc',
        type: 'varchar',
        length: 20,
    })
    nom_opc: string;

    @OneToMany(
        type => OpcpreEntity, // Entidad
        opcpre => opcpre.id_opc, // El campo de la relacion
    )
    NorDis: OpcpreEntity[];

}

