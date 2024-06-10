function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let num2 = stack.pop();
      let num1 = stack.pop();
      if (x === "+") stack.push(num1 + num2);
      else if (x === "-") stack.push(num1 - num2);
      else if (x === "*") stack.push(num1 * num2);
      else if (x === "/") stack.push(num1 / num2);
    }
  }

  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
