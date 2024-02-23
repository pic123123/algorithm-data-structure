import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  //#region Big O Notation
  @Timeout(1000)
  demo() {
    console.log('HELLO FROM THE NODEJS!');

    const t1 = performance.now();
    //console.log(this.addUpto(6)); //21
    console.log(this.addUpto(1000000000)); //500000000067109000
    const t2 = performance.now();
    console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
    return true;
  }

  addUpto(n: number) {
    // case1;
    // let total = 0;
    // for (let index = 0; index <= n; index++) {
    //   total += index;
    // }
    // return total;

    //case2
    return (n * (n + 1)) / 2;
  }

  //#endregion
}
