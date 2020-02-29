import {TypeOrmModule} from '@nestjs/typeorm';
import {PreguntaEntity} from "./pregunta.entity";
import {Module} from "@nestjs/common";
import {PreguntaService} from "./pregunta.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    PreguntaEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        PreguntaService
    ],
    exports: [
        PreguntaService
    ],
})
export class PreguntaModule {

}
