import {TypeOrmModule} from '@nestjs/typeorm';
import {ContenidoEntity} from "./contenido.entity";
import {Module} from "@nestjs/common";
import {ContenidoService} from "./contenido.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ContenidoEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        ContenidoService
    ],
    exports: [
        ContenidoService
    ],
})
export class ContenidoModule {

}
