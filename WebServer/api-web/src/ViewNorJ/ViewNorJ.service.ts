import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorJEntity} from "./ViewNorJ.entity";

@Injectable()
export class ViewNorJService {
    constructor(
        @InjectRepository(ViewNorJEntity) // Inyectar Dependencias
        public _repositorioViewNorJ: Repository<ViewNorJEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorJEntity | undefined> {
        return this._repositorioViewNorJ
            .findOne(id_con);
    }

}