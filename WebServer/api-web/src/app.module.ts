import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InstitucionModule} from "./Institucion/institucion.module";
import {FormularioModule} from "./Formulario/formulario.module";
import {NormaModule} from "./Norma/norma.module";
import {DiscapacidadModule} from "./Discapacidad/discapacidad.module";
import {NordisModule} from "./NorDis/nordis.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {InstitucionEntity} from "./Institucion/institucion.entity";
import {FormularioEntity} from "./Formulario/formulario.entity";
import {NormaEntity} from "./Norma/norma.entity";
import {DiscapacidadEntity} from "./Discapacidad/discapacidad.entity";
import {NordisEntity} from "./NorDis/nordis.entity";
import {OpcionModule} from "./Opcion/opcion.module";
import {PreguntaModule} from "./Pregunta/pregunta.module";
import {OpcpreModule} from "./OpcPre/opcpre.module";
import {OpcionEntity} from "./Opcion/opcion.entity";
import {PreguntaEntity} from "./Pregunta/pregunta.entity";
import {OpcpreEntity} from "./OpcPre/opcpre.entity";
import {ContenidoEntity} from "./Contenido/contenido.entity";
import {ContenidoModule} from "./Contenido/contenido.module";


@Module({
    imports: [
        InstitucionModule,
        FormularioModule,
        NormaModule,
        DiscapacidadModule,
        NordisModule,
        OpcionModule,
        PreguntaModule,
        OpcpreModule,
        ContenidoModule,


        TypeOrmModule.forRoot(
            {
                name: 'default', // Nombre cadena de Conex.
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'bdproyecto',
                dropSchema: false,
                entities: [
                    InstitucionEntity,
                    FormularioEntity,
                    NormaEntity,
                    DiscapacidadEntity,
                    NordisEntity,
                    OpcionEntity,
                    PreguntaEntity,
                    OpcpreEntity,
                    ContenidoEntity,


                ],
                synchronize: true, // Crear -> true , Conectar -> false
            },
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
