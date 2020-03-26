import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorKService} from "./ViewNorK.service";
import {ViewNorKEntity} from "./ViewNorK.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorKEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorKService
    ],
    exports: [
        ViewNorKService
    ],
})
export class ViewNorKModule {

}
