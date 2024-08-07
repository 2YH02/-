function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++; // 막대기 끝나는 지점인지 확인
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

// let a = "()(((()())(())()))(())";
let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
