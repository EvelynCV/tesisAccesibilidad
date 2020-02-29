import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {NordisEntity} from "../NorDis/nordis.entity";


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
        type => NordisEntity, // Entidad
        nordis => nordis.id_dis, // El campo de la relacion
    )
    NorDis: NordisEntity[];

}
