import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {OpcionEntity} from "../Opcion/opcion.entity";
import {PreguntaEntity} from "../Pregunta/pregunta.entity";

@Entity('opcpre')
export class OpcpreEntity {
    @PrimaryGeneratedColumn({
        name: 'id_opcpre',
    })
    id_opcpre: number;

    @ManyToOne(
        type => OpcionEntity, // Entidad
        opcion => opcion.id_opc, // El campo de la relacion
    )
    id_opc: OpcionEntity[];

    @ManyToOne(
        type => PreguntaEntity, // Entidad
        pregunta => pregunta.id_pre, // El campo de la relacion
    )
    id_pre: PreguntaEntity[];

}