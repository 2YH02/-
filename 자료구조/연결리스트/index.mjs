import { LinkedList, Node } from "./linked-list.mjs";

/**
 * 1. 모든 데이터 출력 printAll()
 * 2. 모든 데이터 제거 clear()
 * 3. 인덱스 삽입 insertAt(index, data)
 * 4. 마지막 삽입 insertLast(data)
 * 5. 인덱스 삭제 deleteAt(index)
 * 6. 마지막 삭제 deleteLast()
 * 7. 인덱스 읽기 getNodeAt(index)
 */

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

let list = new LinkedList();

console.log("---------insertAt---------");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);

list.printAll();

console.log("---------clear---------");
list.clear();
list.printAll();

console.log("---------insertLast---------");
list.insertLast(1);
list.insertLast(10);
list.insertLast(100);

list.printAll();

console.log("---------deleteAt---------");
list.deleteAt(1);
list.printAll();

console.log("---------deleteLast---------");
list.insertLast(90);
list.insertLast(1000);
list.deleteLast();

list.printAll();

console.log("---------getNodeAt---------");

let node1 = list.getNodeAt(1);
let node0 = list.getNodeAt(0);
let node2 = list.getNodeAt(2);

console.log(node1.data, node0.data, node2.data);
