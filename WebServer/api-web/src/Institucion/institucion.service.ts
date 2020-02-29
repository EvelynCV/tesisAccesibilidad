import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {InstitucionEntity} from "./institucion.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class InstitucionService {
    /*esta es la linea de la magia donde importas el directorio para acceder a los metodos :)*/
    constructor(
        /* Cambiar a publico para poder acceder a las consultas */
        @InjectRepository(InstitucionEntity) // Inyectar Dependencias
        public _repositorioInstitucion: Repository<InstitucionEntity>
    ) {
    }

    encontrarUno(id: number): Promise<InstitucionEntity | undefined> {
        return this._repositorioInstitucion
            .findOne(id);
    }

    crearUno(usuario: InstitucionEntity) {
        return this._repositorioInstitucion
            .save(usuario);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioInstitucion
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: InstitucionEntity
    ): Promise<InstitucionEntity> {
        usuario.idIns = id;
        return this._repositorioInstitucion
            .save(usuario); // UPSERT
    }

    buscar(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
            nombre: 'ASC'
        }
    ): Promise<InstitucionEntity[]> {

        // Exactamente el nombre o Exactamente la cedula
        const consultaWhere = [
            {
                nombre: ''
            },
            {
                cedula: ''
            }
        ];

        // Exactamente el nombre o LIKE la cedula
        const consultaWhereLike = [
            {
                // nombre: Like('a%')
            },
            {
                // cedula: Like('%a')
            }
        ];

        // id sea mayor a 20
        const consultaWhereMoreThan = {
            // id: MoreThan(20)
        };

        // id sea igual a x
        const consultaWhereIgual = {
            id: 30
        };

        return this._repositorioInstitucion
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}