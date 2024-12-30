### service 与 @Injectable

#### Injectable

@Injectable

@Injectable() 是 NestJS 中的一个装饰器，用于标记一个类可以被 NestJS 的依赖注入系统所管理
当你在一个类上使用 @Injectable() 装饰器时，你告诉 NestJS 这个类是一个提供者（provider），并且可以被注入到其他类中作为依赖

1. 声明提供者：将一个类声明为提供者，使其可以被 NestJS 的依赖注入系统管理
2. 依赖注入：允许该类的实例被注入到其他类的构造函数中

#### 使用 service

1. 定义服务类

假设你有一个 controller - home.controller.ts，定义一个服务类 HomeService，你希望在 Home 控制器中使用这个服务。你可以使用 @Injectable() 装饰器将 HomeService 标记为可注入的提供者

nest-zero/src/app.service.ts

```javascript

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

```

2. 注册服务类

在模块中注册 HomeService，使其可以被依赖注入系统管理

nest-zero/src/app.module.ts

```javascript
/** T应用程序的根模块（root module） */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HomeController } from './modules/home/home.controller'
import { HomeService } from './modules/home/home.service'

@Module({
    imports: [],
    controllers: [AppController, HomeController],
    providers: [AppService, HomeService],
})
export class AppModule {}
```

3. 将服务类注入到控制器

nest-zero/src/modules/home/home.controller.ts
