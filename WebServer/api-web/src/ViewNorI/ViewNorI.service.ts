import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorIEntity} from "./ViewNorI.entity";

@Injectable()
export class ViewNorIService {
    constructor(
        @InjectRepository(ViewNorIEntity) // Inyectar Dependencias
        public _repositorioViewNorI: Repository<ViewNorIEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorIEntity | undefined> {
        return this._repositorioViewNorI
            .findOne(id_con);
    }

}