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

  //#region recursion - 재귀

  /**
   * @alias 코딩연습10 : power
   * @description 밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다.
   * 이 함수는 `Math.pow()`의 기능을 모방해야 합니다. `Math.pow()`함수는`base^exponent`처럼 `base` 에 `exponent`를 제곱한 값을 반환합니다.
   */
  //@Timeout(1000)
  power(num1 = 2, num2 = 4) {
    console.log(`Calling power(${num1}, ${num2})`);
    // 지수가 0이면 1을 반환
    if (num2 === 0) {
      console.log(`Returning 1`);
      return 1;
    }
    // 지수가 음수일 경우 양수로 바꿔주고 함수 재귀 호출
    if (num2 < 0) {
      console.log(`Recursively calling power(${1 / num1}, ${-num2})`);
      const result = this.power(1 / num1, -num2);
      console.log(`Returning ${result}`);
      return result;
    }
    // 지수가 양수일 경우
    console.log(`Recursively calling power(${num1}, ${num2 - 1})`);
    const result = num1 * this.power(num1, num2 - 1);
    console.log(`Returning ${result}`);
    return result;
  }

  /**
   * @alias 코딩연습11 : factorial
   * @description 숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
   * 팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다. 예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.
   */
  //@Timeout(1000)
  factorial(num = 5) {
    console.log(`Calculating factorial(${num})`);
    // 입력이 0이면 1을 반환
    if (num === 0) {
      console.log(`Base case reached. Returning 1`);
      return 1;
    }
    // 재귀적으로 자기 자신보다 1 작은 숫자의 팩토리얼에 현재 숫자를 곱한 값을 반환
    console.log(`Recursively calculating factorial(${num - 1})`);
    const result = num * this.factorial(num - 1);
    console.log(`Returning ${result}`);
    return result;
  }

  /**
   * @alias 코딩연습12 : productOfArray
   * @description 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.
   */
  //@Timeout(1000)
  productOfArray(arr = [1, 2, 3, 4]) {
    console.log(`Calculating productOfArray(${arr})`);
    // 배열의 길이가 0이면 1을 반환
    if (arr.length === 0) {
      console.log(`Base case reached. Returning 1`);
      return 1;
    }
    // 배열의 첫 번째 요소를 제외한 나머지 배열의 곱을 재귀적으로 계산
    console.log(`Recursively calculating productOfArray(${arr.slice(1)})`);
    const result = arr[0] * this.productOfArray(arr.slice(1));
    console.log(`Returning ${result}`);
    return result;
  }

  /**
   * @alias 코딩연습13 : recursiveRange
   * @description 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.
   */
  //@Timeout(1000)
  recursiveRange(num = 5) {
    console.log(`Calculating recursiveRange(${num})`);
    // 숫자가 0 이하이면 0을 반환
    if (num <= 0) {
      console.log(`Base case reached. Returning 0`);
      return 0;
    }
    // 재귀적으로 숫자를 하나씩 줄여가면서 더하기
    console.log(`Recursively calculating recursiveRange(${num - 1})`);
    const result = num + this.recursiveRange(num - 1);
    console.log(`Returning ${result}`);
    return result;
  }

  /**
   * @alias 코딩연습14 : fib
   * @description 숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오. 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.
   * 수학에서 피보나치 수(영어: Fibonacci numbers)는 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열이다. 처음 여섯 항은 각각 1, 1, 2, 3, 5, 8이다. 편의상 0번째 항을 0으로 두기도 한다.
   */
  //@Timeout(1000)
  fib(n = 6) {
    console.log(`Calculating fib(${n})`);
    // n이 1 이하이면 n을 반환
    if (n <= 1) {
      console.log(`Base case reached. Returning ${n}`);
      return n;
    }
    // n번째 피보나치 수를 재귀적으로 계산하여 반환
    console.log(`Recursively calculating fib(${n - 1}) + fib(${n - 2})`);
    const result = this.fib(n - 1) + this.fib(n - 2);
    console.log(`Returning ${result}`);
    return result;
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
  //@Timeout(1000)
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

  /**
   * @alias naive
   * @descriptionNaive 알고리즘은 문제의 복잡성을 무시하고 간단한 접근 방법을 채택합니다.
   * 이러한 접근 방식은 대개 문제의 크기가 작거나 입력이 제한적인 경우에 효율적입니다.
   * 그러나 입력의 크기가 커지면 Naive 알고리즘은 비효율적이며 느려질 수 있습니다.
   */
  //@Timeout(1000)
  naiveSearch(arr = [1, 2, 3, 4, 5], target = 3) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        console.log(i);
        return i; // 값을 찾으면 인덱스를 반환하고 함수 종료
      }
    }
    return -1; // 값을 찾지 못한 경우 -1을 반환
  }

  //@Timeout(1000)
  naiveStringSearch(str = 'ababababc', pattern = 'ab') {
    let count = 0;
    for (let i = 0; i <= str.length - pattern.length; i++) {
      let match = true;
      for (let j = 0; j < pattern.length; j++) {
        if (str[i + j] !== pattern[j]) {
          match = false;
          break; // 일치하지 않으면 내부 루프를 중단하고 다음 위치로 이동
        }
      }
      if (match) {
        count++; // 패턴을 찾으면 카운트를 증가시킴
      }
    }
    console.log(count);
    return count;
  }

  //#endregion

  //#region 정렬

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

  //@Timeout(1000)
  insertionSort(arr = [5, 1, 3, 7, 2, 9]) {
    for (let i = 1; i < arr.length; i++) {
      const currentValue = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        j--;
      }
      console.log(currentValue);
      arr[j + 1] = currentValue;
    }
    console.log(arr);
    return arr;
  }

  //@Timeout(1000)
  merge(arr1 = [1, 10, 50], arr2 = [2, 14, 99, 100]) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    console.log(results);
    return results;
  }

  //#endregion

  //#region Stack & Queue & Trees
  //@Timeout(1000)
  //자바스크립트에서 스택은 사실 위처럼 별도의 알고리즘 구현 필요 없이 Array의 push()와 pop() 메서드를 사용하여 활용이 가능합
  stack() {
    const stack = [];
    stack.push('google');
    stack.push('instagram');
    stack.push('youtube');
    console.log(stack); //[ 'google', 'instagram', 'youtube' ]
    stack.pop();
    console.log(stack); //[ 'google', 'instagram' ] 맨 마지막 youtube를 제거함
    console.log(stack.pop()); //instagram 맨 마지막 instagram을 제거함

    const stack2 = ['first', 'second', 'third'];
    stack2.shift();
    console.log(stack2); //[ 'second', 'third' ] 맨앞을 제거함 이거왜하냐근데 ㅡㅡ;
    stack2.unshift('fourth');
    //unshift는 배열의 맨앞에 값을 집어넣음으로써, 모든 인덱스들을 변경하기 때문에 비효율적임
    console.log(stack2); //[ 'fourth', 'second', 'third' ] 맨앞에 집어넣음
  }

  //   class Node {
  //     public value: any;
  //     public next: Node | null = null;

  //     constructor(value: any) {
  //         this.value = value;
  //     }
  // }

  // class Stack {
  //     private head: Node | null = null;

  //     // 스택에 요소 추가
  //     public push(value: any): void {
  //         let newNode = new Node(value);
  //         if (this.head) {
  //             newNode.next = this.head;
  //         }
  //         this.head = newNode;
  //     }

  //     // 스택에서 요소 제거 및 반환
  //     public pop(): any {
  //         if (!this.head) return null;
  //         let popValue = this.head.value;
  //         this.head = this.head.next;
  //         return popValue;
  //     }

  //     // 스택의 최상위 요소 확인
  //     public peek(): any {
  //         if (!this.head) return null;
  //         return this.head.value;
  //     }
  // }

  //@Timeout(1000)
  queue() {
    const q = [];
    q.unshift('first');
    q.unshift('second');
    q.unshift('third');
    console.log(q); //[ 'third', 'second', 'first' ]
    console.log(q.pop()); //FIFO - first 삭제
  }

  // class Node {
  //   public value: any;
  //   public next: Node | null = null;

  //   constructor(value: any) {
  //     this.value = value;
  //   }
  // }

  // class Queue {
  //   private head: Node | null = null;
  //   private tail: Node | null = null;

  //   public enqueue(value: any): void {
  //     const newNode = new Node(value);
  //     if (!this.tail) {
  //       this.head = this.tail = newNode;
  //     } else {
  //       this.tail.next = newNode;
  //       this.tail = newNode;
  //     }
  //   }

  //   public dequeue(): any {
  //     if (!this.head) return null;
  //     const value = this.head.value;
  //     this.head = this.head.next;
  //     if (!this.head) {
  //       this.tail = null;
  //     }
  //     return value;
  //   }

  //   // 큐가 비어있는지 확인하는 메소드
  //   public isEmpty(): boolean {
  //     return this.head === null;
  //   }

  //   // 큐의 맨 앞 요소를 반환하는 메소드 (제거하지 않음)
  //   public peek(): any {
  //     if (!this.head) return null;
  //     return this.head.value;
  //   }
  // }
  //#endregion
}
