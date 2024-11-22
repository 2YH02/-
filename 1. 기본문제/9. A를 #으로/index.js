function solution(s) {
  let answer;

  answer = s.replace(/A/g, "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
