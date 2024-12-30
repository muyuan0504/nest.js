/**
 * @Injectable 用于标记一个类，可以被 NestJS 的依赖注入系统所管理
 *
 * 当你在一个类上使用 @Injectable() 装饰器时，你告诉 NestJS 这个类是一个提供者（provider），并且可以被注入到其他类中作为依赖
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  private readonly items: string[] = [];

  findAll(): string[] {
    return this.items;
  }

  findOne(id: string): string {
    return this.items[id];
  }

  create(item: string) {
    this.items.push(item);
  }
}
