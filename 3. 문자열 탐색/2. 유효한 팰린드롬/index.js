function solution(s) {
  let answer = "NO";
  let str = s.toLowerCase().replace(/[^a-z]/g, "");
  let r_str = str.split("").reverse().join("");

  if (str === r_str) answer = "YES";
  console.log(r_str);

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
