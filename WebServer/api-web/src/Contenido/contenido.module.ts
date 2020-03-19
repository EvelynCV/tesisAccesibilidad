import {TypeOrmModule} from '@nestjs/typeorm';
import {ContenidoEntity} from "./contenido.entity";
import {Module} from "@nestjs/common";
import {ContenidoService} from "./contenido.service";
//import {ContenidoController} from "./contenido.controller";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ContenidoEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
      //  ContenidoController
    ],
    providers: [
        ContenidoService
    ],
    exports: [
        ContenidoService
    ],
})
export class ContenidoModule {

}
