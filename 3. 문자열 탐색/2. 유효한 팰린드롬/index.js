function solution(s) {
  let answer = "YES";
  s = s.toUpperCase().replace(/[^A-Z]/g, "");

  if (s !== s.split("").reverse().join("")) answer = "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
