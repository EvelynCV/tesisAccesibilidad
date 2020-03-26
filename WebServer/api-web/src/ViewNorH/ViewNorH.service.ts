import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorHEntity} from "./ViewNorH.entity";

@Injectable()
export class ViewNorHService {
    constructor(
        @InjectRepository(ViewNorHEntity) // Inyectar Dependencias
        public _repositorioViewNorH: Repository<ViewNorHEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorHEntity | undefined> {
        return this._repositorioViewNorH
            .findOne(id_con);
    }

}