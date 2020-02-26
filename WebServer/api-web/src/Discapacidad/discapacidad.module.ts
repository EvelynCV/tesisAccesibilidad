import {TypeOrmModule} from '@nestjs/typeorm';
import {DiscapacidadEntity} from "./discapacidad.entity";
import {Module} from "@nestjs/common";
import {DiscapacidadService} from "./discapacidad.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    DiscapacidadEntity, // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        DiscapacidadService
    ],
    exports: [
        DiscapacidadService
    ],
})
export class DiscapacidadModule {

}
