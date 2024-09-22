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

console.log("--head에 데이터 삽입--");
console.log(`isEmpty: ${deque.isEmpty()}`);
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("--head 데이터 1개 제거--");
deque.removeFirst();
deque.printAll();
console.log("--head 데이터 1개 제거--");
deque.removeFirst();
deque.printAll();
console.log("--head 데이터 1개 제거--");
deque.removeFirst();
deque.printAll();
console.log("--head 데이터 1개 제거--");
deque.removeFirst();
deque.printAll();
console.log("--head 데이터 1개 제거--");
deque.removeFirst();
deque.printAll();

console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("--tail에 데이터 삽입--");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("--tail 데이터 1개 제거--");
deque.removeLast();
deque.printAll();
console.log("--tail 데이터 1개 제거--");
deque.removeLast();
deque.printAll();
console.log("--tail 데이터 1개 제거--");
deque.removeLast();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
