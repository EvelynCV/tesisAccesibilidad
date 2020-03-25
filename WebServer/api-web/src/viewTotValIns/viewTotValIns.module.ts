import {TypeOrmModule} from '@nestjs/typeorm';
import {ViewTotValInsEntity} from "./viewTotValIns.entity" ;
import {Module} from "@nestjs/common";
import {ViewTotValInsService} from "./viewTotValIns.service"

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewTotValInsEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewTotValInsService
    ],
    exports: [
        ViewTotValInsService
    ],
})
export class ViewTotValInsModule {

}
