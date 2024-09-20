import { DoublyLinkedList } from "../연결리스트/doubly-linked-list.mjs";

export class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    return this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertLast(data);
  }

  removeLast() {
    return this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
