import { HashTable } from "./hash-table.mjs";

/**
 * set - 데이터 삽입
 * get - 데이터 읽기
 * remove - 데이터 제거
 */

const hashTable = new HashTable();

hashTable.set(1, "a");
hashTable.set(4, "b");
hashTable.set(20, "c");
hashTable.set(6, "d");
hashTable.set(22, "e");
hashTable.set(21, "f");
hashTable.set(5, "g");
hashTable.set(10, "h");
hashTable.set(8, "i");
hashTable.set(9, "j");
hashTable.set(14, "k");

console.log(`1: ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
console.log(`21: ${hashTable.get(21)}`);
