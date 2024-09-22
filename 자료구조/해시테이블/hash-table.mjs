import { DoublyLinkedList } from "../연결리스트/doubly-linked-list.mjs";

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class HashTable {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }

  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    let curNode = this.arr[this.hashFunction(key)].head;

    while (curNode) {
      if (curNode.data.key === key) {
        return curNode.data.value;
      }

      curNode = curNode.next;
    }

    return null;
  }

  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let curNode = list.head;
    let deletedIndex = 0;

    while (curNode) {
      if (curNode.data.key === key) {
        return list.deleteAt(deletedIndex);
      }

      curNode = curNode.next;
      deletedIndex++;
    }

    return null;
  }
}
