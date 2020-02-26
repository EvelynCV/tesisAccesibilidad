import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {NorDisEntity} from "../Nor_Dis/nor-dis.entity";
import {NormaEntity} from "../Normas/norma.entity";

@Entity('discapacidad')
export class DiscapacidadEntity {
    @PrimaryGeneratedColumn({
        name: 'id_dis',
    })
    id_dis: number;

    @Column({
        name: 'nom_dis',
        type: 'varchar',
        length: 20,
    })
    nom_dis: string;

    @OneToMany(
        type => NorDisEntity, // Entidad
        nordis => nordis.id_nordis, // El campo de la relacion
    )
    NorDis: NorDisEntity[];

}

