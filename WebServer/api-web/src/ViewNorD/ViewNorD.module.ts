import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorDEntity} from "./ViewNorD.entity";
import {ViewNorDService} from "./ViewNorD.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorDEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorDService
    ],
    exports: [
        ViewNorDService
    ],
})
export class ViewNorDModule {

}
