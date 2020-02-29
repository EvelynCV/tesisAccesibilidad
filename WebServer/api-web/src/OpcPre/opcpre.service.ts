import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {OpcpreEntity} from "./opcpre.entity";
import {DeleteResult, Repository} from "typeorm";

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

}