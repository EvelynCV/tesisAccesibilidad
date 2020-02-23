import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FormularioEntity} from "./formulario.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class FormularioService {
    constructor(
        @InjectRepository(FormularioEntity) // Inyectar Dependencias
        public _repositorioUsuario: Repository<FormularioEntity>
    ) {
    }

    encontrarUno(id: number): Promise<FormularioEntity | undefined> {
        return this._repositorioUsuario
            .findOne(id);
    }

    crearUno(usuario: FormularioEntity) {
        return this._repositorioUsuario
            .save(usuario);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioUsuario
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: FormularioEntity
    ): Promise<FormularioEntity> {
        usuario.idFor = id;
        return this._repositorioUsuario
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
    ): Promise<FormularioEntity[]> {

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

        return this._repositorioUsuario
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}