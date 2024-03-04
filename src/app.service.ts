import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  //#region Big O Notation
  //@Timeout(1000)
  demo() {
    console.log('HELLO FROM THE NODEJS!');

    const t1 = performance.now();
    //console.log(this.addUpto(6)); //21
    // console.log(this.addUpto(1000000000)); //500000000067109000
    // const t2 = performance.now();
    // console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
    //this.logAtLeast5(10);
    this.logAtMost5(3);
    return true;
  }

  logAtLeast5(n: number) {
    for (let i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
  }

  logAtMost5(n: number) {
    for (let i = 1; i <= Math.min(5, n); i++) {
      console.log(i);
    }
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

  //#region sort
  //@Timeout(1000)
  sort(arr = [23, 45, 6, 12, 13]) {
    arr.sort();
    console.log(arr);
    return arr;
  }

  // @Timeout(1000)
  numSort() {
    const numArr = [6, 4, 15, 10];
    numArr.sort(this.numCompare);
    console.log(numArr);
    return numArr;
  }

  numCompare(num1, num2) {
    return num1 - num2;
  }

  // @Timeout(1000)
  lengthSort() {
    const strArr = ['Joker', 'Casey', 'Sam', 'Hena'];
    strArr.sort(this.lengthCompare);
    console.log(strArr);
    return strArr;
  }

  lengthCompare(str1, str2) {
    return str1.length - str2.length;
  }

  @Timeout(1000)
  bublleSort(arr = [8, 1, 2, 3, 4, 5, 6, 7]) {
    let noSwaps;
    for (let index = arr.length; index > 0; index--) {
      noSwaps = true;
      for (let j = 0; j < index - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          //SWAP
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
      console.log(`one pass complete!`);
    }
    console.log(`result : ${arr}`);
    return arr;
  }
  //#endregion
}
