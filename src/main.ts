import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = 3000
async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`we started at port ${PORT} welcome`)
}
start();
