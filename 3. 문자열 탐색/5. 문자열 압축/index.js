function solution(s) {
  let answer = "";
  let n = s.length;

  let num = 1;

  for (let i = 0; i < n; i++) {
    if (s[i] === s[i + 1]) {
      num++;
    } else {
      answer += s[i];
      if (num > 1) {
        answer += num;
        num = 1;
      }
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
