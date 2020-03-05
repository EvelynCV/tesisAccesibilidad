import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// const cookieParser = require('cookie-parser');
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';

async function bootstrap() {
  const app = await NestFactory.create(AppModule ) as NestExpressApplication;

  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  app.use(express.static('imagenes'));
  app.use(express.static('img'));
  app.use(express.static('js'));
  app.use(express.static('lib'));
  app.use(express.static('php'));
  app.use(express.static('CSS'));

  await app.listen(3001);
    // app.use(favicon(path.join(__dirname,'..','imagenes')));

}
bootstrap();
