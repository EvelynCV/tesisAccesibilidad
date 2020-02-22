import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';
import {Formulario} from './Formulario/formulario';
import {Institucion} from './Institucion/institucion';
import {InstitucionService} from "./Institucion/institucion.service";

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly institucionService: InstitucionService) {

     }
/*
  @Get('Hola')
  getHello(): string {
   return this.appService.getHello();
  }
*/
  @Get('prueba')
  getPrueba(@Response()res) {
    return res.render('prueba');
  }

  @Get('HolaMundo')
  getHolaMundo(@Response()res) {
    return res.render('HolaMundo');
  }

  @Get('informacion')
  getInformacion(@Response()res) {
    return res.render('informacion');
  }

    @Get('bargraph')
    async getbargraph(@Response()res) {
      const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
      console.log(respuesta)
      const instituciones = await this.institucionService._repositorioUsuario.find();
      return res.render('bargraph', {
        instituciones:instituciones
      });
    }

}
