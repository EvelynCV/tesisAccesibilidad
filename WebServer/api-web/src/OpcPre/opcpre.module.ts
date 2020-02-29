import {TypeOrmModule} from '@nestjs/typeorm';
import {OpcpreEntity} from "./opcpre.entity";
import {Module} from "@nestjs/common";
import {OpcpreService} from "./opcpre.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    OpcpreEntity, // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        OpcpreService
    ],
    exports: [
       OpcpreService
    ],
})
export class OpcpreModule {

}
