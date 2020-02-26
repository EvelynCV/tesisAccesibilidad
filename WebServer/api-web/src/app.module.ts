import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InstitucionModule} from "./Institucion/institucion.module";
import {FormularioModule} from "./Formulario/formulario.module";
import {NormaModule} from "./Normas/norma.module";
import {DiscapacidadModule} from "./Discapacidad/discapacidad.module";
import {NorDisModule} from "./Nor_Dis/nor-dis.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {InstitucionEntity} from "./Institucion/institucion.entity";
import {FormularioEntity} from "./Formulario/formulario.entity";
import {NormaEntity} from "./Normas/norma.entity";
import {DiscapacidadEntity} from "./Discapacidad/discapacidad.entity";
import {NorDisEntity} from "./Nor_Dis/nor-dis.entity";


@Module({
  imports: [
    InstitucionModule,
      FormularioModule,
      NormaModule,
      DiscapacidadModule,
      NorDisModule,
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
              NorDisEntity,
          ],
          synchronize: true, // Crear -> true , Conectar -> false
        },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
