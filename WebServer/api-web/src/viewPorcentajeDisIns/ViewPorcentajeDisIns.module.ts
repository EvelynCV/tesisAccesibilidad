import {TypeOrmModule} from '@nestjs/typeorm';

import {ViewPorcentajeDisInsEntity} from "./ViewPorcentajeDisIns.entity";
import {Module} from "@nestjs/common";
import {ViewPorcentajeDisInsService} from "./ViewPorcentajeDisIns.service";


@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewPorcentajeDisInsEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewPorcentajeDisInsService
    ],
    exports: [
        ViewPorcentajeDisInsService
    ],
})
export class ViewPorcentajeDisInsModule {

}
