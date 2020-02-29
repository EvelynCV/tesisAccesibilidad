import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FormularioEntity} from "./formulario.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class FormularioService {
    constructor(
        @InjectRepository(FormularioEntity) // Inyectar Dependencias
        public _repositorioFormulario: Repository<FormularioEntity>
    ) {
    }

    encontrarUno(id_for: number): Promise<FormularioEntity | undefined> {
        return this._repositorioFormulario
            .findOne(id_for);
    }

    crearUno(usuario: FormularioEntity) {
        return this._repositorioFormulario
            .save(usuario);
    }

    borrarUno(id_for: number): Promise<DeleteResult> {
        return this._repositorioFormulario
            .delete(id_for);
    }

    actualizarUno(
        id: number,
        usuario: FormularioEntity
    ): Promise<FormularioEntity> {
        usuario.id_for = id;
        return this._repositorioFormulario
            .save(usuario); // UPSERT
    }
}