function solution(s) {
  let answer;

  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let r = stack.pop();
      let l = stack.pop();
      if (x === "+") stack.push(l + r);
      else if (x === "-") stack.push(l - r);
      else if (x === "*") stack.push(l * r);
      else if (x === "/") stack.push(l / r);
    }
  }

  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
