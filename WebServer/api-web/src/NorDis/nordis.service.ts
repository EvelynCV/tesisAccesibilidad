import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NordisEntity} from "./nordis.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class NordisService {
    constructor(
        @InjectRepository(NordisEntity) // Inyectar Dependencias
        public _repositorioNorDis: Repository<NordisEntity>
    ) {
    }

    encontrarUno(id_nordis: number): Promise<NordisEntity | undefined> {
        return this._repositorioNorDis
            .findOne(id_nordis);
    }

    crearUno(nordis: NordisEntity) {
        return this._repositorioNorDis
            .save(nordis);
    }

    borrarUno(id_nordis: number): Promise<DeleteResult> {
        return this._repositorioNorDis
            .delete(id_nordis);
    }

    actualizarUno(
        id: number,
        usuario: NordisEntity
    ): Promise<NordisEntity> {
        usuario.id_nordis = id;
        return this._repositorioNorDis
            .save(usuario); // UPSERT
    }

}