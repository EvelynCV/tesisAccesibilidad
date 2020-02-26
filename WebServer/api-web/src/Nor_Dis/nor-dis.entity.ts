import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {NormaEntity} from "../Normas/norma.entity";
import {DiscapacidadEntity} from "../Discapacidad/discapacidad.entity";

@Entity('nor-dis')
export class NorDisEntity {
    @PrimaryGeneratedColumn({
        name: 'id_dis',
    })
    id_nordis: number;

    @ManyToOne(
        type => NormaEntity, // Entidad
        norma => norma.id_nor, // El campo de la relacion
    )
    id_nor: NormaEntity[];

    @ManyToOne(
        type => DiscapacidadEntity, // Entidad
        discapacidad => discapacidad.id_dis, // El campo de la relacion
    )
    id_dis: DiscapacidadEntity[];

}