import { Injectable } from '@nestjs/common';
import {Formulario} from './Formulario/formulario';
import {Institucion} from './Institucion/institucion';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 }
