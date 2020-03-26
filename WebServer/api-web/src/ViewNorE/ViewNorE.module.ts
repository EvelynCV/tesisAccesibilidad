import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorEService} from "./ViewNorE.service";
import {ViewNorEEntity} from "./ViewNorE.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorEEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorEService
    ],
    exports: [
        ViewNorEService
    ],
})
export class ViewNorEModule {

}
