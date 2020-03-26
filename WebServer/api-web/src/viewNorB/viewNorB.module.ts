import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorBService} from "./viewNorB.service";
import {ViewNorBEntity} from "./viewNorB.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorBEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorBService
    ],
    exports: [
        ViewNorBService
    ],
})
export class ViewNorBModule {

}
