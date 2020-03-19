/*import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { ContenidoEntity } from './contenido.entity';

@Controller('contenido')
export class ContenidoController {

    constructor(private service: ContenidoService) { }

    @Get('id_for')
    get(@Param() params) {
        return this.service.buscar(params.id_for, params.id_opcpre);
    }
}*/