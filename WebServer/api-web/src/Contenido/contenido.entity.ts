import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import {FormularioEntity} from "../Formulario/formulario.entity";
import {NorDisEntity} from "../../dist/Nor_Dis/nor-dis.entity";
import {OpcpreEntity} from "../OpcPre/opcpre.entity";


@Entity('contenido')
export class ContenidoEntity {
    @PrimaryGeneratedColumn({
        name: 'id_con',
    })
    id_con: number;

    @OneToOne(type => FormularioEntity)
    @JoinColumn()
    id_for: FormularioEntity;

    @OneToOne(type => NorDisEntity)
    @JoinColumn()
    id_nordis: NorDisEntity;

    @OneToOne(type => OpcpreEntity)
    @JoinColumn()
    id_opcpre: OpcpreEntity;
}