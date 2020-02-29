import {TypeOrmModule} from '@nestjs/typeorm';
import {OpcionEntity} from "./opcion.entity";
import {Module} from "@nestjs/common";
import {OpcionService} from "./opcion.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    OpcionEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        OpcionService
    ],
    exports: [
        OpcionService
    ],
})
export class OpcionModule {

}
