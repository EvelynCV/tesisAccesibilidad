import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ViewTotValInsEntity} from "./viewTotValIns.entity";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

@Injectable()
export class ViewTotValInsService {
    constructor(
        @InjectRepository(ViewTotValInsEntity) // Inyectar Dependencias
        public _repositorioViewTotValIns: Repository<ViewTotValInsEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewTotValInsEntity | undefined> {
        return this._repositorioViewTotValIns
            .findOne(id_con);
    }

}