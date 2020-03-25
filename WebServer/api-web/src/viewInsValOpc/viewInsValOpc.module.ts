import {TypeOrmModule} from '@nestjs/typeorm';
import {ViewInsValOpcEntity} from "./viewInsValOpc.entity";
import {Module} from "@nestjs/common";
import {ViewInsValOpcService} from "./viewInsValOpc.service";
//import {ContenidoController} from "./contenido.controller";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewInsValOpcEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewInsValOpcService
    ],
    exports: [
        ViewInsValOpcService
    ],
})
export class ViewInsValOpcModule {

}
