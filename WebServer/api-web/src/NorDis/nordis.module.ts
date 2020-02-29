import {TypeOrmModule} from '@nestjs/typeorm';
import {NordisEntity} from "./nordis.entity";
import {Module} from "@nestjs/common";
import {NordisService} from "./nordis.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    NordisEntity, // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        NordisService
    ],
    exports: [
        NordisService
    ],
})
export class NordisModule {

}
