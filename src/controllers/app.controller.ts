import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello/:name')
  getHelloByName(@Param('name') name, @Query('age') age = true): string {
    return this.appService.getHelloByName(name, age);
  }
}
