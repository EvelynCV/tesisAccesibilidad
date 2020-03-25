import {TypeOrmModule} from '@nestjs/typeorm';
import {ViewTotNorEntity} from "./ViewTotNor.entity";
import {Module} from "@nestjs/common";
import {ViewTotNorService} from "./ViewTotNor.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewTotNorEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewTotNorService
    ],
    exports: [
        ViewTotNorService
    ],
})
export class ViewTotNorModule {

}
