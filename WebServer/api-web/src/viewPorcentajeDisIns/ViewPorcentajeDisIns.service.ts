import {Injectable, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ViewPorcentajeDisInsEntity} from "./ViewPorcentajeDisIns.entity";
import {DeleteResult, Repository, Between, MoreThan, getManager, getRepository} from "typeorm";

@Injectable()
export class ViewPorcentajeDisInsService {
    constructor(
        @InjectRepository(ViewPorcentajeDisInsEntity) // Inyectar Dependencias
        public _repositorioViewPorcentajeDisIns: Repository<ViewPorcentajeDisInsEntity>
    ) {
    }

    encontrarUno(id_con: number): Promise<ViewPorcentajeDisInsEntity | undefined> {
        return this._repositorioViewPorcentajeDisIns
            .findOne(id_con);
    }

}