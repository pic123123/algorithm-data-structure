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

  /**
   * @alias 코딩연습24: Linear Search 연습
   * @description 배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우 그 인덱스(0, 1, 2, ... 중 몇 번째에 위치하는지)를 반환하는 linearSearch라는 함수를 작성합니다.
   * 값이 배열 안에 존재하지 않으면 -1을 반환합니다.
   * indexof를 사용하지마세요
   * - indexOf
   * - includes
   * - find
   * - findIndex
   */
  //@Timeout(1000)
  // linearSearch(numArr = [10, 15, 20, 25, 30], num1 = 15) {
  //   const index = numArr.findIndex((one) => one === num1);
  //   console.log(index);
  //   return index;
  // }
  linearSearch(numArr = [10, 15, 20, 25, 30], num1 = 15) {
    for (let index = 0; index < numArr.length; index++) {
      if (numArr[index] === num1) {
        console.log(index);
        return index;
      }
    }
    return -1;
  }

  /**
   * @alias 코딩연습25 : Binary Search 연습
   * @description 정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 값이 존재하지 않으면 -1을 반환합니다.
   * 이 알고리즘은 linearSearch 보다 더 효율적일 것입니다. 구현 방법은 여기에서 확인할 수 있습니다.
   * 1) https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
   * 2) https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search
   */
  @Timeout(1000)
  binarySearch(arr = [2, 5, 6, 9, 13, 15, 28, 30], num = 15) {
    let low = 0;
    let high = arr.length - 1;

    //JavaScript의 while 루프는 특정 조건이 참(true)인 동안 반복하여 코드를 실행하는 제어 구조입니다.
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      console.log(`start: ${low}, mid: ${mid}, end: ${high}`);
      if (arr[mid] === num) {
        console.log(`result : ${mid}`);
        return mid; // 값을 찾았으므로 인덱스를 반환합니다.
      } else if (arr[mid] < num) {
        low = mid + 1; // 중간값보다 크므로 오른쪽 절반을 검색합니다.
      } else {
        high = mid - 1; // 중간값보다 작으므로 왼쪽 절반을 검색합니다.
      }
    }

    return -1; // 값을 찾지 못했으므로 -1을 반환합니다.
  }

  //@Timeout(1000)
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

  //@Timeout(1000)
  selectionSort(arr = [9, 6, 7, 3, 5]) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    console.log(`Initial array: ${arr}`);
    for (let index = 0; index < arr.length; index++) {
      let lowest = index;
      console.log(`Start of pass ${index + 1}`);
      for (let j = index + 1; j < arr.length; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      console.log(`Lowest element index: ${lowest}`);
      if (index !== lowest) {
        swap(arr, index, lowest);
        console.log(`Swapping ${arr[index]} with ${arr[lowest]}: ${arr}`);
      }
      console.log(`End of pass ${index + 1}`);
    }
    console.log(`result Sorted array: ${arr}`);
    return arr;
  }

  //#endregion
}
