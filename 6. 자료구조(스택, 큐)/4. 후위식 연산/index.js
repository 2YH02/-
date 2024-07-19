function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rn = stack.pop();
      let ln = stack.pop();
      if (x === "+") {
        stack.push(ln + rn);
      } else if (x === "*") {
        stack.push(ln * rn);
      } else if (x === "-") {
        stack.push(ln - rn);
      } else if (x === "/") {
        stack.push(ln / rn);
      }
    }
  }

  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
