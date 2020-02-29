import {TypeOrmModule} from '@nestjs/typeorm';
import {NormaEntity} from "./norma.entity";
import {Module} from "@nestjs/common";
import {NormaService} from "./norma.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    NormaEntity, // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        NormaService
    ],
    exports: [
        NormaService
    ],
})
export class NormaModule {

}
