import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
/*
  @Get('HolaMundo')
    getPrueba1(@Response()res){
    return res.render('HolaMundo')
  }
*/
  @Get('prueba')
  getPrueba(@Response()res){
    return res.render('prueba')
  }


}


