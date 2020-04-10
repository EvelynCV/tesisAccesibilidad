import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ViewTotInsNorEntity} from "./ViewTotInsNor.entity";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

@Injectable()
export class ViewTotInsNorService {
    constructor(
        @InjectRepository(ViewTotInsNorEntity) // Inyectar Dependencias
        public _repositorioViewTotInsNor: Repository<ViewTotInsNorEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewTotInsNorEntity | undefined> {
        return this._repositorioViewTotInsNor
            .findOne(id_con);
    }

}