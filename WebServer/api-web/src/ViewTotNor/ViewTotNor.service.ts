import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ViewTotNorEntity} from "./ViewTotNor.entity";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

@Injectable()
export class ViewTotNorService {
    constructor(
        @InjectRepository(ViewTotNorEntity) // Inyectar Dependencias
        public _repositorioViewTotNor: Repository<ViewTotNorEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewTotNorEntity | undefined> {
        return this._repositorioViewTotNor
            .findOne(id_con);
    }

}