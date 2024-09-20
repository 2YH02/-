import { Deque } from "./deque.mjs";

/**
 * printAll - 모든 데이터 출력
 * addFirst - head에 데이터 삽입
 * removeFirst - head에서 데이터 제거
 * addLast - tail에서 데이터 삽입
 * removeLast - tail에서 데이터 제거
 * isEmpty - 리스트 비었는지 체크
 */

const deque = new Deque();

console.log("---------addFirst---------");
console.log(`isEmpty: ${deque.isEmpty()}`);
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("---------remove1---------");
deque.removeFirst();
deque.printAll();
console.log("---------remove2---------");
deque.removeFirst();
deque.printAll();
console.log("---------remove3---------");
deque.removeFirst();
deque.printAll();
console.log("---------remove4---------");
deque.removeFirst();
deque.printAll();
console.log("---------remove5---------");
deque.removeFirst();
deque.printAll();

console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("---------addLast---------");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("---------removeLast1---------");
deque.removeLast();
deque.printAll();
console.log("---------removeLast2---------");
deque.removeLast();
deque.printAll();
console.log("---------removeLast3---------");
deque.removeLast();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
