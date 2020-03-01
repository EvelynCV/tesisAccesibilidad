import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ContenidoEntity} from "./contenido.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class ContenidoService {
    constructor(
        @InjectRepository(ContenidoEntity) // Inyectar Dependencias
        public _repositorioContenido: Repository<ContenidoEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ContenidoEntity | undefined> {
        return this._repositorioContenido
            .findOne(id_con);
    }

    crearUno(usuario: ContenidoEntity) {
        return this._repositorioContenido
            .save(usuario);
    }

    borrarUno(id_con: number): Promise<DeleteResult> {
        return this._repositorioContenido
            .delete(id_con);
    }

    actualizarUno(
        id: number,
        usuario: ContenidoEntity
    ): Promise<ContenidoEntity> {
        usuario.id_con = id;
        return this._repositorioContenido
            .save(usuario); // UPSERT
    }
}