import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {DiscapacidadEntity} from "../Discapacidad/discapacidad.entity";
import {OpcpreEntity} from "../OpcPre/opcpre.entity";

@Entity('pregunta')
export class PreguntaEntity {
    @PrimaryGeneratedColumn({
        name: 'id_pre',
    })
    id_pre: number;

    @Column({
        name: 'cod_pre',
        type: 'varchar',
        length: 6,
    })
    cod_pre: string;

    @Column({
        name: 'nom_pre',
        type: 'varchar',
        length: 200,
    })
    nom_pre: string;


    @OneToMany(
        type => OpcpreEntity, // Entidad
        opcpre => opcpre.id_pre, // El campo de la relacion
    )
    opcpre: OpcpreEntity[];

}

