import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NorDisEntity} from "./nor-dis.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class NorDisService {
    constructor(
        @InjectRepository(NorDisEntity) // Inyectar Dependencias
        public _repositorioNorDis: Repository<NorDisEntity>
    ) {
    }

    encontrarUno(id_dis: number): Promise<NorDisEntity | undefined> {
        return this._repositorioNorDis
            .findOne(id_dis);
    }

    crearUno(discapacidad: NorDisEntity) {
        return this._repositorioNorDis
            .save(discapacidad);
    }

    borrarUno(id_dis: number): Promise<DeleteResult> {
        return this._repositorioNorDis
            .delete(id_dis);
    }

    actualizarUno(
        id: number,
        usuario: NorDisEntity
    ): Promise<NorDisEntity> {
        usuario.id_nordis = id;
        return this._repositorioNorDis
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
    ): Promise<NorDisEntity[]> {

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

        return this._repositorioNorDis
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}