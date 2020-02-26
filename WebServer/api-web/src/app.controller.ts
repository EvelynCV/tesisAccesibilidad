import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';
import {Formulario} from './Formulario/formulario';
import {Institucion} from './Institucion/institucion';
import {InstitucionService} from "./Institucion/institucion.service";
import {FormularioService} from "./Formulario/formulario.service";
import {NormaService} from "./Normas/norma.service";
import {DiscapacidadService} from "./Discapacidad/discapacidad.service";
import {NorDisService} from "./Nor_Dis/nor-dis.service";

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly institucionService: InstitucionService,
              private readonly formularioService: FormularioService,
              private readonly normaService: NormaService,
              private readonly discapacidadService: DiscapacidadService,
              private readonly norDisService:NorDisService) {

     }

  @Get('Hola')
  getHello(): string {
   return this.appService.getHello();
  }

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

    @Get('institucion')
    async getinstitucion(@Response()res) {
      //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
      //console.log(respuesta)
      const instituciones = await this.institucionService._repositorioUsuario.find();
      return res.render('institucion', {
        instituciones:instituciones
      });


    }
  @Get('formulario')
  async getformulario(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const formulario = await this.formularioService._repositorioUsuario.find();
    return res.render('formulario', {
      formulario:formulario
    });

  }

  @Get('norma')
  async getnorma(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const norma = await this.normaService._repositorioNorma.find();
    return res.render('norma', {
      normas:norma
    });

  }

  @Get('discapacidad')
  async getdiscapacidad(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const discapacidad = await this.discapacidadService._repositorioDiscapacidad.find();
    return res.render('discapacidad', {
      discapacidades:discapacidad
    });

  }

  @Get('nordis')
  async getnordis(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const nordis = await this.norDisService._repositorioNorDis.find();
    return res.render('nordis', {
      nordis:nordis
    });

  }


}
