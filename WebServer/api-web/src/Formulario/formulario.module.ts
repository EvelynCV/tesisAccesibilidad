import {TypeOrmModule} from '@nestjs/typeorm';
import {FormularioEntity} from "./formulario.entity";
import {Module} from "@nestjs/common";
import {FormularioService} from "./formulario.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    FormularioEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        FormularioService
    ],
    exports: [
        FormularioService
    ],
})
export class FormularioModule {

}
