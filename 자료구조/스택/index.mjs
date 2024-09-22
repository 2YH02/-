import { Stack } from "./stack.mjs";

/**
 * push - 데이터 삽입
 * pop - 데이터 제거
 * peek - 데이터 참조
 * isEmpty - 비었는지 체크
 */

const stack = new Stack();

console.log("--데이터 삽입, 데이터 제거 및 출력--");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("--데이터 삽입 및 뒤에서 참조--");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.peek().data);

console.log("--데이터 제거 및 참조--");
stack.pop();
console.log(stack.peek().data);

console.log("--비었는지 확인--");
console.log(`isEmpty: ${stack.isEmpty()}`);

console.log("--데이터 제거 및 비었는지 확인--");
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`);

console.log("--빈 상태로 데이터 제거 요청--");
console.log(stack.pop());
