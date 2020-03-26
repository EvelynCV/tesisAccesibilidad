import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";
import {ViewNorDEntity} from "./ViewNorD.entity";

@Injectable()
export class ViewNorDService {
    constructor(
        @InjectRepository(ViewNorDEntity) // Inyectar Dependencias
        public _repositorioViewNorD: Repository<ViewNorDEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewNorDEntity | undefined> {
        return this._repositorioViewNorD
            .findOne(id_con);
    }

}