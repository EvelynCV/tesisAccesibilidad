import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {OpcionEntity} from "./opcion.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class OpcionService {
    constructor(
        @InjectRepository(OpcionEntity) // Inyectar Dependencias
        public _repositorioOpcion: Repository<OpcionEntity>
    ) {
    }

    encontrarUno(id: number): Promise<OpcionEntity | undefined> {
        return this._repositorioOpcion
            .findOne(id);
    }

    crearUno(norma: OpcionEntity) {
        return this._repositorioOpcion
            .save(norma);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioOpcion
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: OpcionEntity
    ): Promise<OpcionEntity> {
        usuario.id_opc = id;
        return this._repositorioOpcion
            .save(usuario); // UPSERT
    }
}