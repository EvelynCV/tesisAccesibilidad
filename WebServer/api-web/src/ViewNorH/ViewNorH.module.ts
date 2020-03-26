import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorHService} from "./ViewNorH.service";
import {ViewNorHEntity} from "./ViewNorH.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorHEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorHService
    ],
    exports: [
        ViewNorHService
    ],
})
export class ViewNorHModule {

}
