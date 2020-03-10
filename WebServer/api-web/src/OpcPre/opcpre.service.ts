import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {OpcpreEntity} from "./opcpre.entity";
import {DeleteResult, Repository, Like, MoreThan, Between} from "typeorm";


@Injectable()
export class OpcpreService {
    constructor(
        @InjectRepository(OpcpreEntity) // Inyectar Dependencias
        public _repositorioOpcPre: Repository<OpcpreEntity>
    ) {
    }

    encontrarUno(id_opcpre: number): Promise<OpcpreEntity | undefined> {
        return this._repositorioOpcPre
            .findOne(id_opcpre);
    }

    crearUno(opcpre: OpcpreEntity) {
        return this._repositorioOpcPre
            .save(opcpre);
    }

    borrarUno(id_opcpre: number): Promise<DeleteResult> {
        return this._repositorioOpcPre
            .delete(id_opcpre);
    }

    actualizarUno(
        id: number,
        usuario: OpcpreEntity
    ): Promise<OpcpreEntity> {
        usuario.id_opcpre = id;
        return this._repositorioOpcPre
            .save(usuario); // UPSERT
    }










    buscar2(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',

        }
    ): Promise<OpcpreEntity[]> {

      // id sea igual a x
        const consultaWhereIgual = {
            id_pre: 4
        };

        return this._repositorioOpcPre
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }









    buscar(): Promise<OpcpreEntity[]> {

        // id sea igual a x
        const consultaWhereIgual = {
            id_opcpre: 5
        };

        return this._repositorioOpcPre
            .find({

            });
    }


}