import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DiscapacidadEntity} from "./discapacidad.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class DiscapacidadService {
    constructor(
        @InjectRepository(DiscapacidadEntity) // Inyectar Dependencias
        public _repositorioDiscapacidad: Repository<DiscapacidadEntity>
    ) {
    }

    encontrarUno(id_dis: number): Promise<DiscapacidadEntity | undefined> {
        return this._repositorioDiscapacidad
            .findOne(id_dis);
    }

    crearUno(discapacidad: DiscapacidadEntity) {
        return this._repositorioDiscapacidad
            .save(discapacidad);
    }

    borrarUno(id_dis: number): Promise<DeleteResult> {
        return this._repositorioDiscapacidad
            .delete(id_dis);
    }

    actualizarUno(
        id: number,
        usuario: DiscapacidadEntity
    ): Promise<DiscapacidadEntity> {
        usuario.id_dis = id;
        return this._repositorioDiscapacidad
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
    ): Promise<DiscapacidadEntity[]> {

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

        return this._repositorioDiscapacidad
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}