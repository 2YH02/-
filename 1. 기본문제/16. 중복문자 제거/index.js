function solution(s) {
  let answer = "";
  const a = new Set(s);

  answer = Array.from(a).join("");
  return answer;
}
console.log(solution("ksekkset"));
