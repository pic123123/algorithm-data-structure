import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Timeout(1000)
  async demo() {
    console.log('HELLO FROM THE NODEJS!');
    return true;
  }
}
