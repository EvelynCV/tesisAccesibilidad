import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorJService} from "./ViewNorJ.service";
import {ViewNorJEntity} from "./ViewNorJ.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorJEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorJService
    ],
    exports: [
        ViewNorJService
    ],
})
export class ViewNorJModule {

}
