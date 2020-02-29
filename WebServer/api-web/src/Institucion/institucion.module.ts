import {TypeOrmModule} from '@nestjs/typeorm'; //para las diferentes consultas
import {InstitucionEntity} from "./institucion.entity";
import {Module} from "@nestjs/common";
import {InstitucionService} from "./institucion.service";
/* aki se especifica la entidad que se ha creado*/
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
    /*llamar y exportar los metodos*/
    providers: [
        InstitucionService
    ],
    exports: [
        InstitucionService
    ],
})
export class InstitucionModule {

}