import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {DiscapacidadEntity} from "../Discapacidad/discapacidad.entity";
import {NordisEntity} from "../NorDis/nordis.entity";

@Entity('norma')
export class NormaEntity {
    @PrimaryGeneratedColumn({
        name: 'id_nor',
    })
    id_nor: number;

    @Column({
        name: 'cod_nor',
        type: 'varchar',
        length: 3,
    })
    cod_nor: string;

    @Column({
        name: 'nom_nor',
        type: 'varchar',
        length: 200,
    })
    nom_nor: string;

    @OneToMany(
        type => NordisEntity, // Entidad
        nordis => nordis.id_nor, // El campo de la relacion
    )
    NorDis: NordisEntity[];

}

