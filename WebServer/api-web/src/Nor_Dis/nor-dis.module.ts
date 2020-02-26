import {TypeOrmModule} from '@nestjs/typeorm';
import {NorDisEntity} from "./nor-dis.entity";
import {Module} from "@nestjs/common";
import {NorDisService} from "./nor-dis.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    NorDisEntity, // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
    ],
    providers: [
        NorDisService
    ],
    exports: [
        NorDisService
    ],
})
export class NorDisModule {

}
