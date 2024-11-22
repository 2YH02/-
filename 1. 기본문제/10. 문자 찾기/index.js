function solution(s, t) {
  let answer = 0;

  answer = s.split(t).length - 1;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
