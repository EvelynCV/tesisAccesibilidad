import {Controller, Get, Param, Query, Response} from '@nestjs/common';
import { AppService } from './app.service';
import {InstitucionService} from "./Institucion/institucion.service";
import {FormularioService} from "./Formulario/formulario.service";
import {NormaService} from "./Norma/norma.service";
import {DiscapacidadService} from "./Discapacidad/discapacidad.service";
import {NordisService} from "./NorDis/nordis.service";
import {OpcionService} from "./Opcion/opcion.service";
import {PreguntaService} from "./Pregunta/pregunta.service";
import {OpcpreService} from "./OpcPre/opcpre.service";
import {ContenidoService} from "./Contenido/contenido.service";
import {ViewInsValOpcService} from "./viewInsValOpc/viewInsValOpc.service"
import {ViewTotValInsService} from "./viewTotValIns/viewTotValIns.service";
import {ViewTotNorService} from "./ViewTotNor/ViewTotNor.service";
import {ViewNorAService} from "./viewNorA/viewNorA.service";
import {ViewNorBService} from "./viewNorB/viewNorB.service";
import {ViewNorCService} from "./ViewNorC/ViewNorC.service";
import {ViewNorDService} from "./ViewNorD/ViewNorD.service";
import {ViewNorEService} from "./ViewNorE/ViewNorE.service";
import {ViewNorFService} from "./ViewNorF/ViewNorF.service";
import {ViewNorGService} from "./ViewNorG/ViewNorG.service";
import {ViewNorHService} from "./ViewNorH/ViewNorH.service";
import {ViewNorIService} from "./ViewNorI/ViewNorI.service";
import {ViewNorJService} from "./ViewNorJ/ViewNorJ.service";
import {ViewNorKService} from "./ViewNorK/ViewNorK.service";
import {ViewTotNorInsService} from "./viewTotNorIns/ViewTotNorIns.service";

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly institucionService: InstitucionService,
              private readonly formularioService: FormularioService,
              private readonly normaService: NormaService,
              private readonly discapacidadService: DiscapacidadService,
              private readonly nordisService:NordisService,
              private readonly opcionService: OpcionService,
              private readonly preguntaService: PreguntaService,
              private readonly opcpreService:OpcpreService,
              private readonly contenidoService:ContenidoService,
              private readonly viewInsValOpcService:ViewInsValOpcService,
              private readonly viewTotValInsService:ViewTotValInsService,
              private readonly viewTotNorService:ViewTotNorService,
              private readonly viewNorAService: ViewNorAService,
              private readonly viewNorBService: ViewNorBService,
              private readonly viewNorCService: ViewNorCService,
              private readonly viewNorDService: ViewNorDService,
              private readonly viewNorEService: ViewNorEService,
              private readonly viewNorFService: ViewNorFService,
              private readonly viewNorGService: ViewNorGService,
              private readonly viewNorHService: ViewNorHService,
              private readonly viewNorIService: ViewNorIService,
              private readonly viewNorJService: ViewNorJService,
              private readonly viewNorKService: ViewNorKService,
              private readonly viewTotNorIns: ViewTotNorInsService) {}

  @Get('Hola')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('inicio')
  getInicio(@Response()res) {
    return res.render('inicio');
  }

  @Get('acerca')
  getAcerca(@Response()res) {
    return res.render('acerca');
  }

  @Get('informacion')
  getInformacion(@Response()res) {
    return res.render('informacion');
  }

  @Get('index')
  getIndex(@Response()res) {
    return res.render('index');
  }

  @Get('2dmap')
  get2dmap(@Response()res) {
    return res.render('2dmap');
  }

  /* funciones de ejemplo para llamar y guardar datos en la bd*/
  /*
  @Get('bargraph')
  async getbargraph(@Response()res) {
    const respuesta = await this.institucionService._repositorioInstitucion.save({nomIns:'Prueba 1'});
    console.log(respuesta)
    const instituciones = await this.institucionService._repositorioInstitucion.find();
    return res.render('bargraph', {
      instituciones:instituciones
    });
  }*/

  @Get('institucion')
  async getinstitucion(@Response()res) {
    // const respuesta = await this.institucionService._repositorioInstitucion.save({nom_ins:'Prueba 1'});
    //  console.log(respuesta)
    const instituciones = await this.institucionService._repositorioInstitucion.find();
    return res.render('institucion', {
      instituciones:instituciones
    });
  }

  @Get('formulario')
  async getformulario(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const formularios = await this.formularioService._repositorioFormulario.find();
    return res.render('formulario', {
      formularios:formularios
    });

  }


  @Get('norma')
  async getnorma(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const normas = await this.normaService._repositorioNorma.find();
    return res.render('norma', {
      normas:normas
    });

  }

  @Get('discapacidad')
  async getdiscapacidad(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const discapacidades = await this.contenidoService.buscar()
    return res.render('discapacidad', {
      discapacidades:discapacidades
    });

  }

  @Get('nordis')
  async getnordis(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const nordiss = await this.nordisService._repositorioNorDis.find();
    return res.render('nordis', {
      nordiss:nordiss
    });

  }

  @Get('pregunta')
  async getpregunta(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const preguntas = await this.preguntaService._repositorioPregunta.find();
    return res.render('pregunta', {
      preguntas:preguntas
    });

  }

  @Get('opcion')
  async getopcion(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const opciones = await this.opcionService._repositorioOpcion.find();
    return res.render('opcion', {
      opciones:opciones
    });

  }

  @Get('opcpre')
  async getopcpre(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const opcpres = await this.opcpreService._repositorioOpcPre.find();
    return res.render('opcpre', {
      opcpres: opcpres
    });
  }
/*
  @Get('contenido')
  async getcontenido(@Response()res) {
    //const respuesta = await this.institucionService._repositorioUsuario.save({nomIns:'Prueba 1'});
    //console.log(respuesta)

    const contenidos = await this.contenidoService._repositorioContenido.find();
    return res.render('contenido', {
      contenidos:contenidos
    });
  }
*/
/*
  @Get('contenido')
  get(@Param() params) {
    return this.contenidoService.obtener(params.id_opcpre);
  }
*/

  @Get('contenido')
  async getcontenido(
      @Param() params,
      @Query() query,
      @Response() res
  ) {
    console.log(query);
    const normaNumber = Number(query.nom_ins);
    let consulta:any = {};

    if(normaNumber){
      consulta.nom_ins = normaNumber;
    }
    const contenidos = await this.viewTotNorService._repositorioViewTotNor.find();
    const contenidoFiltrado = await this.viewTotNorService._repositorioViewTotNor.find({
      where:consulta
    });
    console.log(contenidos);
    // return this.contenidoService.buscar();
    return res.render('contenido', {
      contenidos:contenidos,
      contenidoFiltrado:contenidoFiltrado
    });

  }


  @Get('pruebaData')
  async getpruebaData(
      @Param() params,
      @Query() query,
      @Response() res
  ) {
    console.log(query);
    const id_conNumber = Number(query.nom_ins);
    let consulta:any = {};

    if(id_conNumber){
      consulta.nom_ins = id_conNumber;

    }
    const instituciones = await this.viewTotNorIns._repositorioViewTotNorIns.find();
    const institucionesFiltrado = await this.viewTotNorIns._repositorioViewTotNorIns.find({
      where:consulta
    });

    console.log(instituciones);
    // return this.contenidoService.buscar();
    return res.render('pruebaData', {
      instituciones:instituciones,
      institucionesFiltrado:institucionesFiltrado,

    });
  }

  @Get('vistaCompleta')
  async getvistaCompleta(
      @Param() params,
      @Query() query,
      @Response() res
  ) {
    console.log(query);
    const id_conNumber = Number(query.nom_ins);
    let consulta:any = {};

    if(id_conNumber){
      consulta.nom_ins = id_conNumber;

    }
    const instituciones = await this.viewTotNorIns._repositorioViewTotNorIns.find();
    const institucionesFiltrado = await this.viewTotNorIns._repositorioViewTotNorIns.find({
      where:consulta
    });

    console.log(instituciones);
    // return this.contenidoService.buscar();
    return res.render('vistaCompleta', {
      instituciones:instituciones,
      institucionesFiltrado:institucionesFiltrado,

    });
  }

  @Get('resultados')
  async getresultados(
      @Param() params,
      @Query() query,
      @Response() res
  ) {
    console.log(query);
    const id_conNumber = Number(query.nom_ins);
    let consulta:any = {};

    if(id_conNumber){
      consulta.nom_ins = id_conNumber;

    }
    const instituciones = await this.viewTotNorIns._repositorioViewTotNorIns.find();
    const institucionesFiltrado = await this.viewTotNorIns._repositorioViewTotNorIns.find({
      where:consulta
    });

    console.log(instituciones);
    // return this.contenidoService.buscar();
    return res.render('resultados', {
      instituciones:instituciones,
      institucionesFiltrado:institucionesFiltrado,

    });
  }






}






// Parametros HTTP

// Query (consulta)

// http://localhost:3000/api/vista?nombre=adrian&tipoReporte=vertical

// Body

// Params


// servidor   -- HTTP -- cliente




