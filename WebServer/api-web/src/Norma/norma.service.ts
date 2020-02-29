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
        usuario.id_nor = id;
        return this._repositorioNorma
            .save(usuario); // UPSERT
    }
}