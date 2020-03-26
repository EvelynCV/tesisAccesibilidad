import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorKEntity} from "./ViewNorK.entity";

@Injectable()
export class ViewNorKService {
    constructor(
        @InjectRepository(ViewNorKEntity) // Inyectar Dependencias
        public _repositorioViewNorK: Repository<ViewNorKEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorKEntity | undefined> {
        return this._repositorioViewNorK
            .findOne(id_con);
    }

}