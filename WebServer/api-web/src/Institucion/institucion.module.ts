import {TypeOrmModule} from '@nestjs/typeorm';
import {InstitucionEntity} from "./institucion.entity";
import {Module} from "@nestjs/common";
import {InstitucionService} from "./institucion.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    InstitucionEntity, // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        InstitucionService
    ],
    exports: [
        InstitucionService
    ],
})
export class InstitucionModule {

}
