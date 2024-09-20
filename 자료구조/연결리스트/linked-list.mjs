export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let curNode = this.head;

    while (curNode) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위 넘어감");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        curNode = curNode.next;
      }

      newNode.next = curNode.next;
      curNode.next = newNode;
    }

    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거 불가");
    }

    let curNode = this.head;

    if (index === 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        curNode = curNode.next;
      }

      let deleteNode = curNode.next;
      curNode.next = curNode.next.next;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("읽을 수 없음");
    }

    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }

    return curNode;
  }
}
