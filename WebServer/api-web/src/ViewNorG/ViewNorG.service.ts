import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorGEntity} from "./ViewNorG.entity";

@Injectable()
export class ViewNorGService {
    constructor(
        @InjectRepository(ViewNorGEntity) // Inyectar Dependencias
        public _repositorioViewNorG: Repository<ViewNorGEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorGEntity | undefined> {
        return this._repositorioViewNorG
            .findOne(id_con);
    }

}