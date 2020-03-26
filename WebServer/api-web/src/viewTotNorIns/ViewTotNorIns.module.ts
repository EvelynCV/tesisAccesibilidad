import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewTotNorInsEntity} from "./ViewTotNorIns.entity";
import {ViewTotNorInsService} from "./ViewTotNorIns.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewTotNorInsEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewTotNorInsService
    ],
    exports: [
        ViewTotNorInsService
    ],
})
export class ViewTotNorInsModule {

}
