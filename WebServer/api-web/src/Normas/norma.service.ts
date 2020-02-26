import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NormaEntity} from "./norma.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class NormaService {
    constructor(
        @InjectRepository(NormaEntity) // Inyectar Dependencias
        public _repositorioNorma: Repository<NormaEntity>
    ) {
    }

    encontrarUno(id: number): Promise<NormaEntity | undefined> {
        return this._repositorioNorma
            .findOne(id);
    }

    crearUno(norma: NormaEntity) {
        return this._repositorioNorma
            .save(norma);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioNorma
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: NormaEntity
    ): Promise<NormaEntity> {
        usuario.idIns = id;
        return this._repositorioNorma
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
    ): Promise<NormaEntity[]> {

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

        return this._repositorioNorma
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}