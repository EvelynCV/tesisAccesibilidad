import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule ) as NestExpressApplication;
  await app.listen(3000);

   app.setViewEngine('ejs');
   app.setBaseViewsDir(join(__dirname, '..', 'views'));

}
bootstrap();
