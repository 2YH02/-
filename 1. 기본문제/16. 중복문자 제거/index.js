function solution(s) {
  let answer = "";

  answer = Array.from(new Set(s)).join("");

  return answer;
}
console.log(solution("ksekkset"));
