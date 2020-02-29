import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
/* Crea la bd dependiendo de los campos que se requieran incluso aki se puede agregar mas columnas dependiendo las necesidades*/
@Entity('institucion_2')
export class InstitucionEntity {
    @PrimaryGeneratedColumn({
        name: 'id_ins',
    })
    idIns: number;

    @Column({
        name: 'nom_ins',
        type: 'varchar',
        length: 100,
    })
    nomIns: string;

}
