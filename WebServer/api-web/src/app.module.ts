import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InstitucionModule} from "./Institucion/institucion.module";
import {FormularioModule} from "./Formulario/formulario.module";
import {NormaModule} from "./Norma/norma.module";
import {OpcionModule} from "./Opcion/opcion.module";
import {PreguntaModule} from "./Pregunta/pregunta.module";
import {OpcpreModule} from "./OpcPre/opcpre.module";
import {DiscapacidadModule} from "./Discapacidad/discapacidad.module";
import {NordisModule} from "./NorDis/nordis.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContenidoModule} from "./Contenido/contenido.module";
import {ViewInsValOpcModule} from "./viewInsValOpc/viewInsValOpc.module";
import {ViewTotValInsModule} from "./viewTotValIns/viewTotValIns.module";
import {ViewTotNorModule} from "./ViewTotNor/ViewTotNor.module";
import {ViewNorAModule} from "./viewNorA/viewNorA.module";
import {ViewNorBModule} from "./viewNorB/viewNorB.module";
import {InstitucionEntity} from "./Institucion/institucion.entity";
import {FormularioEntity} from "./Formulario/formulario.entity";
import {NormaEntity} from "./Norma/norma.entity";
import {DiscapacidadEntity} from "./Discapacidad/discapacidad.entity";
import {NordisEntity} from "./NorDis/nordis.entity";
import {OpcionEntity} from "./Opcion/opcion.entity";
import {PreguntaEntity} from "./Pregunta/pregunta.entity";
import {OpcpreEntity} from "./OpcPre/opcpre.entity";
import {ContenidoEntity} from "./Contenido/contenido.entity";
import {ViewInsValOpcEntity} from "./viewInsValOpc/viewInsValOpc.entity";
import {ViewTotValInsEntity} from "./viewTotValIns/viewTotValIns.entity";
import {ViewTotNorEntity} from "./ViewTotNor/ViewTotNor.entity";
import {ViewNorAEntity} from "./viewNorA/viewNorA.entity";
import {ViewNorBEntity} from "./viewNorB/viewNorB.entity";


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
        ViewInsValOpcModule,
        ViewTotValInsModule,
        ViewTotNorModule,
        ViewNorAModule,
        ViewNorBModule,


        TypeOrmModule.forRoot(
            {
                name: 'default', // Nombre cadena de Conex.
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'bdproyectoinfo',
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
                    ViewInsValOpcEntity,
                    ViewTotValInsEntity,
                    ViewTotNorEntity,
                    ViewNorAEntity,
                    ViewNorBEntity,
                ],
                synchronize: true, // Crear -> true , Conectar -> false
            },
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
