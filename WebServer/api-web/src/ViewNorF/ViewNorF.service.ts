import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorFEntity} from "./ViewNorF.entity";

@Injectable()
export class ViewNorFService {
    constructor(
        @InjectRepository(ViewNorFEntity) // Inyectar Dependencias
        public _repositorioViewNorF: Repository<ViewNorFEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorFEntity | undefined> {
        return this._repositorioViewNorF
            .findOne(id_con);
    }

}