import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ViewPorcentajeDisNorEntity} from "./ViewPorcentajeDisNor.entity";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

@Injectable()
export class ViewPorcentajeDisNorService {
    constructor(
        @InjectRepository(ViewPorcentajeDisNorEntity) // Inyectar Dependencias
        public _repositorioViewPorcentajeDisNor: Repository<ViewPorcentajeDisNorEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewPorcentajeDisNorEntity | undefined> {
        return this._repositorioViewPorcentajeDisNor
            .findOne(id_con);
    }

}