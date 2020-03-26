import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

import {ViewNorCEntity} from "./ViewNorC.entity";

@Injectable()
export class ViewNorCService {
    constructor(
        @InjectRepository(ViewNorCEntity) // Inyectar Dependencias
        public _repositorioViewNorC: Repository<ViewNorCEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorCEntity | undefined> {
        return this._repositorioViewNorC
            .findOne(id_con);
    }

}