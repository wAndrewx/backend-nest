import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloByName(name, age): string {
    return `Hello ${age}, ${name}!`;
  }
}
