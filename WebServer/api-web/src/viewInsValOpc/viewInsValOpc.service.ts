import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ViewInsValOpcEntity} from "./viewInsValOpc.entity";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

@Injectable()
export class ViewInsValOpcService {
    constructor(
        @InjectRepository(ViewInsValOpcEntity) // Inyectar Dependencias
        public _repositorioViewInsValOpc: Repository<ViewInsValOpcEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewInsValOpcEntity | undefined> {
        return this._repositorioViewInsValOpc
            .findOne(id_con);
    }

}