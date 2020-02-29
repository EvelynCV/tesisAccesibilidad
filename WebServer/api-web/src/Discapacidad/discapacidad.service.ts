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
}
