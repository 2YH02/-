import { HashSet } from "./hash-set.mjs";

/**
 * add(data) - 데이터 삽입
 * isContain(data) - 데이터 체크
 * remove(data)- 데이터 제거
 * clear()- 셋 비우기
 * isEmpty() - 셋이 비었는지 체크
 * printAll() - 모든 데이터 출력
 */

let hashSet = new HashSet();
console.log("--비었는지 확인--");
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("--데이터 삽입--");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();

console.log("--비었는지 확인--");
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("--1 있는지 확인--");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("--1 제거--");
hashSet.remove(1);
hashSet.printAll();

console.log("--1 있는지 확인--");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("--비우기--");
hashSet.clear();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
