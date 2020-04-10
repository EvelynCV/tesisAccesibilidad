import {TypeOrmModule} from '@nestjs/typeorm';
import {ViewTotInsNorEntity} from "./ViewTotInsNor.entity";
import {Module} from "@nestjs/common";
import {ViewTotInsNorService} from "./ViewTotInsNor.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewTotInsNorEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewTotInsNorService
    ],
    exports: [
        ViewTotInsNorService
    ],
})
export class ViewTotInsNorModule {

}
