import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorAEntity} from "./viewNorA.entity";

@Injectable()
export class ViewNorAService {
    constructor(
        @InjectRepository(ViewNorAEntity) // Inyectar Dependencias
        public _repositorioViewNorA: Repository<ViewNorAEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorAEntity | undefined> {
        return this._repositorioViewNorA
            .findOne(id_con);
    }

}