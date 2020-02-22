import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';
import {Formulario} from "./Formulario/formulario";
import {Institucion} from "./Institucion/institucion";

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {

     }
/*
  @Get('Hola')
  getHello(): string {
   return this.appService.getHello();
  }
*/
  @Get('prueba')
  getPrueba(@Response()res){
    return res.render('prueba')
  }

  @Get('HolaMundo')
  getHolaMundo(@Response()res){
    return res.render('HolaMundo')
  }

  @Get('informacion')
  getInformacion(@Response()res){
    return res.render('informacion')
  }

    @Get('bargraph')
    getbargraph(@Response()res){
      this.appService.consultaBD();
        return res.render('bargraph')
    }

}


