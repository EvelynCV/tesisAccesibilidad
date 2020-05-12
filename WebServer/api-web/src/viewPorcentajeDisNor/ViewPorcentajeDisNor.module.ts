import {TypeOrmModule} from '@nestjs/typeorm';

import {ViewPorcentajeDisNorEntity} from "./ViewPorcentajeDisNor.entity";
import {Module} from "@nestjs/common";
import {ViewPorcentajeDisNorService} from "./ViewPorcentajeDisNor.service";


@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewPorcentajeDisNorEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewPorcentajeDisNorService
    ],
    exports: [
        ViewPorcentajeDisNorService
    ],
})
export class ViewPorcentajeDisNorModule{

}
