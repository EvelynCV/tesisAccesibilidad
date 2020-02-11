import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

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

}


