import { HashTable } from "../해시테이블/hash-table.mjs";

export class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    if (!this.hashTable.get(data)) {
      this.hashTable.set(data, -1);
    }
  }

  isContain(data) {
    return !!this.hashTable.get(data);
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;

    for (let i = 0; i < this.hashTable.arr.length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }

    return empty;
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let curNode = this.hashTable.arr[i].head;

      while (curNode) {
        console.log(curNode.data.key);
        curNode = curNode.next;
      }
    }
  }
}
