import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorFService} from "./ViewNorF.service";
import {ViewNorFEntity} from "./ViewNorF.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorFEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorFService
    ],
    exports: [
        ViewNorFService
    ],
})
export class ViewNorFModule {

}
