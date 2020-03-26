import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorIEntity} from "./ViewNorI.entity";
import {ViewNorIService} from "./ViewNorI.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorIEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorIService
    ],
    exports: [
        ViewNorIService
    ],
})
export class ViewNorIModule {

}
