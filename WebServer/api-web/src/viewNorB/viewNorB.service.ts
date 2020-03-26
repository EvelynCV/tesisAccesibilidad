import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorBEntity} from "./viewNorB.entity";

@Injectable()
export class ViewNorBService {
    constructor(
        @InjectRepository(ViewNorBEntity) // Inyectar Dependencias
        public _repositorioViewNorB: Repository<ViewNorBEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorBEntity | undefined> {
        return this._repositorioViewNorB
            .findOne(id_con);
    }

}