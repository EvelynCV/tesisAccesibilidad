import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {DiscapacidadEntity} from "../Discapacidad/discapacidad.entity";
import {NorDisEntity} from "../Nor_Dis/nor-dis.entity";

@Entity('norma')
export class NormaEntity {
    @PrimaryGeneratedColumn({
        name: 'id_nor',
    })
    id_nor: number;

    @Column({
        name: 'nom_nor',
        type: 'varchar',
        length: 200,
    })
    nom_nor: string;

    @OneToMany(
        type => NorDisEntity, // Entidad
        nordis => nordis.id_nordis, // El campo de la relacion
    )
    NorDis: NorDisEntity[];

}

