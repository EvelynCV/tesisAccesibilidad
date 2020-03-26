import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorEEntity} from "./ViewNorE.entity";

@Injectable()
export class ViewNorEService {
    constructor(
        @InjectRepository(ViewNorEEntity) // Inyectar Dependencias
        public _repositorioViewNorE: Repository<ViewNorEEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorEEntity | undefined> {
        return this._repositorioViewNorE
            .findOne(id_con);
    }

}