import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PreguntaEntity} from "./pregunta.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class PreguntaService {
    constructor(
        @InjectRepository(PreguntaEntity) // Inyectar Dependencias
        public _repositorioPregunta: Repository<PreguntaEntity>
    ) {
    }

    encontrarUno(id: number): Promise<PreguntaEntity | undefined> {
        return this._repositorioPregunta
            .findOne(id);
    }

    crearUno(norma: PreguntaEntity) {
        return this._repositorioPregunta
            .save(norma);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioPregunta
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: PreguntaEntity
    ): Promise<PreguntaEntity> {
        usuario.id_pre = id;
        return this._repositorioPregunta
            .save(usuario); // UPSERT
    }
}