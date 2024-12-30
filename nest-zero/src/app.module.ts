/** T应用程序的根模块（root module） */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './modules/home/home.controller';
import { HomeService } from './modules/home/home.service';

@Module({
  imports: [],
  controllers: [AppController, HomeController],
  providers: [AppService, HomeService],
})
export class AppModule {}
