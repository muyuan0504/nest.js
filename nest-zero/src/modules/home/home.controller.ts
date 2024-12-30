import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HomeService } from './home.service';

/**
 * @Controller('home')
 * 说明请求路径前缀是 /home
 *
 * 方法调用规则：
 * 【get】findAll: http://localhost:3000/items
 * 【get】:id    : /items/:id -> eg: http://localhost:3000/items/0
 * 【post】      : http://localhost:3000/items发送POST请求
 *
 * 参数处理：
 * @Param 用来获取 URL 路径中的动态参数, 会匹配 GET 请求 'GET /item/123' 中的 123
 * @Query 用来获取查询字符串中的参数，会匹配 GET 请求 'GET /items?id=123' 中的 123
 * 
 * HomeService 引入 HomeService 处理，将公共数据模块提取到 .service 中去
 */

@Controller('home')
export class HomeController {
  //   private items = [];
  constructor(private readonly HomeService: HomeService) {}

  @Get()
  findAll(): string[] {
    // return this.items;
    return this.HomeService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: string): string {
  //     console.error('---------- aiden -------------fineOne-');
  //     return this.items[id];
  //   }

  @Post()
  create(@Body() newItem: string): string {
    // this.items.push(newItem);
    this.HomeService.create(newItem);
    return newItem;
  }

  @Get('getId')
  getId(@Query('id') id: string): string {
    // return this.items[id]
    return this.HomeService.findOne(id);
  }

  /** 如果要配置路由 /home/useId/xxx 这类三级路由，那么直接定义到 @Get 函数中即可，而不是以下这种方式 */

  // 错误示范
  //   @Get('useId')
  //   @Get(':id')
  //   checkId(@Param('id') id: string): string {
  //     return this.items[id];
  //   }

  @Get('useId/:id')
  checkId(@Param('id') id: string): string {
    // const val = this.items[id];
    // if (val === undefined) return 'cant find this item';
    // return this.items[id];
    return this.HomeService.findOne(id);
  }
}
