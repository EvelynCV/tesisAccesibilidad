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
import {ViewTotInsNorService} from "./viewTotInsNor/ViewTotInsNor.service";
import {ViewPorcentajeDisInsService} from "./viewPorcentajeDisIns/ViewPorcentajeDisIns.service";

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
              private readonly viewTotNorIns: ViewTotNorInsService,
              private readonly viewTotInsNorService:ViewTotInsNorService,
              private readonly ViewPorcentajeDisInsService:ViewPorcentajeDisInsService) {}

  @Get('inicio')
  getInicio(@Response()res) {
    return res.render('inicio');
  }

  @Get('acerca')
  getAcerca(@Response()res) {
    return res.render('acerca');
  }
  @Get('resultados')
  async getresultados(
      @Param() params,
      @Query() query,
      @Response() res
  ) {

    const id_conNumber = Number(query.nom_ins);

    const tot_nor_ins = await this.viewTotNorIns._repositorioViewTotNorIns.find();
    const tot_ins_nor= await this.viewTotInsNorService._repositorioViewTotInsNor.find();
    const tot_val_ins= await this.viewTotValInsService._repositorioViewTotValIns.find();
    const porcentaje_dis_ins= await this.ViewPorcentajeDisInsService._repositorioViewPorcentajeDisIns.find();


    return res.render('resultados', {
      tot_nor_ins:tot_nor_ins,
      tot_ins_nor:tot_ins_nor,
      tot_val_ins:tot_val_ins,
      porcentaje_dis_ins:porcentaje_dis_ins,
    });
  }
  @Get('datosGenerales')
  async getDatosGenerales(
      @Param() params,
      @Query() query,
      @Response() res
  ) {
    console.log(query);
    const id_conNumber = Number(query.nom_ins);

    const tot_nor_ins = await this.viewTotNorIns._repositorioViewTotNorIns.find();
    const tot_ins_nor= await this.viewTotInsNorService._repositorioViewTotInsNor.find();
    const tot_val_ins= await this.viewTotValInsService._repositorioViewTotValIns.find();
    const porcentaje_dis_ins= await this.ViewPorcentajeDisInsService._repositorioViewPorcentajeDisIns.find();


    return res.render('datosGenerales', {
      tot_nor_ins:tot_nor_ins,
      tot_ins_nor:tot_ins_nor,
      tot_val_ins:tot_val_ins,
      porcentaje_dis_ins:porcentaje_dis_ins,
    });
  }

  @Get('datosInstitucion')
  async getDatosInstitucion(
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
    const tot_ins_nor= await this.viewTotInsNorService._repositorioViewTotInsNor.find();

    const institucionesFiltrado = await this.viewTotNorIns._repositorioViewTotNorIns.find({
      where:consulta
    });
    console.log(instituciones);
    // return this.contenidoService.buscar();
    return res.render('datosInstitucion', {
      instituciones:instituciones,
      tot_ins_nor:tot_ins_nor,
      institucionesFiltrado:institucionesFiltrado,
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
    const tot_ins_nor= await this.viewTotInsNorService._repositorioViewTotInsNor.find();
    const institucionesFiltrado = await this.viewTotNorIns._repositorioViewTotNorIns.find({
      where:consulta
    });
    console.log(instituciones);
    // return this.contenidoService.buscar();
    return res.render('pruebaData', {
      instituciones:instituciones,
      tot_ins_nor:tot_ins_nor,
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
    const tot_ins_nor= await this.viewTotInsNorService._repositorioViewTotInsNor.find();
    const institucionesFiltrado = await this.viewTotNorIns._repositorioViewTotNorIns.find({
      where:consulta
    });
    console.log(instituciones);
    // return this.contenidoService.buscar();
    return res.render('vistaCompleta', {
      instituciones:instituciones,
      tot_ins_nor:tot_ins_nor,
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




