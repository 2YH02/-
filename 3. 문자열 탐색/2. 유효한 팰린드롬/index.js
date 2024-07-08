function solution(s) {
  let answer = "NO";
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  const sr = s.split("").reverse().join("");

  if (s === sr) answer = "YES";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
