import { NestFactory } from "@nestjs/core";
import {ValidationPipe} from '@nestjs/common';
import {AppModule} from './app.module';
import {Config} from './app.config';
import serverlessExpress from '@vendia/serverless-express';
import { Handler, Callback, Context } from "aws-lambda";

//apiyi serverless çalıştırmak için tercihe bağlı kullanılabilir //serverless offline komutu başlatır diğer yola göre daha yavaş çalışır

let server: Handler;


async function bootstrap(){
  const app = await NestFactory.create(AppModule, {
    logger: console
  });


  app.setGlobalPrefix(Config.apiPrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({app: expressApp})
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
) => {
  server = server ?? await bootstrap()
  return server(event, context, callback);

}