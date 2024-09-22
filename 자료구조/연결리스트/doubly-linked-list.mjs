export class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail - null;
    this.count = 0;
  }

  printAll() {
    let curNode = this.head;
    let data = "[";

    while (curNode) {
      data += curNode.data + " ";
      curNode = curNode.next;
    }

    data += "]";
    console.log(data);
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
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let curNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        curNode = curNode.next;
      }

      newNode.next = curNode.next;
      newNode.prev = curNode;
      curNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
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
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return deleteNode;
    } else if (index === this.count - 1) {
      let deleteNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;

      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        curNode = curNode.next;
      }

      let deleteNode = curNode.next;
      curNode.next = curNode.next.next;
      curNode.next.prev = curNode;
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
