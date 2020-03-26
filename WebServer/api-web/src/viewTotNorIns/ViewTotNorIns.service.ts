import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewTotNorInsEntity} from "./ViewTotNorIns.entity";

@Injectable()
export class ViewTotNorInsService {
    constructor(
        @InjectRepository(ViewTotNorInsEntity) // Inyectar Dependencias
        public _repositorioViewTotNorIns: Repository<ViewTotNorInsEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewTotNorInsEntity | undefined> {
        return this._repositorioViewTotNorIns
            .findOne(id_con);
    }

}