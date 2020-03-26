import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorAEntity} from "./viewNorA.entity";
import {ViewNorAService} from "./viewNorA.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorAEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorAService
    ],
    exports: [
        ViewNorAService
    ],
})
export class ViewNorAModule {

}
