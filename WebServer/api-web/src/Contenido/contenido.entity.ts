import {Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import {FormularioEntity} from "../Formulario/formulario.entity";
import {NordisEntity} from "../NorDis/nordis.entity";
import {OpcpreEntity} from "../OpcPre/opcpre.entity";


@Entity('contenido')
export class ContenidoEntity {
    @PrimaryGeneratedColumn({
        name: 'id_con',
    })
    id_con: number;

    @ManyToOne(type => FormularioEntity)
    @JoinColumn()
    id_for: FormularioEntity;

    @ManyToOne(type => NordisEntity)
    @JoinColumn()
    id_nordis: NordisEntity;

    @ManyToOne(type => OpcpreEntity)
    @JoinColumn()
    id_opcpre: OpcpreEntity;
}
