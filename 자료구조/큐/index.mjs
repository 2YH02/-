import { Queue } from "./queue.mjs";

/**
 * enqueue - 데이터 삽입
 * dequeue - 데이터 제거
 * front - 데이터 참조
 * isEmpty - 비었는지 확인
 */

let queue = new Queue();

console.log("---------enqueue---------");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.front().data);

console.log("---------dequeue---------");
console.log(`${queue.dequeue().data} 제거`);
console.log(`${queue.dequeue().data} 제거`);

console.log(queue.front().data);

console.log("---------isEmpty---------");
console.log(`${queue.dequeue().data} 제거`);
console.log(`${queue.dequeue().data} 제거`);

console.log(queue.dequeue());

console.log(queue.isEmpty());
