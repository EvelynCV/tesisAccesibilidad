import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {ViewNorGService} from "./ViewNorG.service";
import {ViewNorGEntity} from "./ViewNorG.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ViewNorGEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        //  ContenidoController
    ],
    providers: [
        ViewNorGService
    ],
    exports: [
        ViewNorGService
    ],
})
export class ViewNorGModule {

}
