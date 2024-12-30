/** 带有单个路由的基本控制器 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 使用 @Controller装饰器定义控制器
 * 使用 @Get、@Post等装饰器定义路由处理方法
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
