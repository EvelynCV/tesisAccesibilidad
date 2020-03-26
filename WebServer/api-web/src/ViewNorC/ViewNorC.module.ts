import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorCService} from "./ViewNorC.service";
import {ViewNorCEntity} from "./ViewNorC.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorCEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorCService
    ],
    exports: [
        ViewNorCService
    ],
})
export class ViewNorCModule {

}
