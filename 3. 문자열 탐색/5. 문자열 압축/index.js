function solution(s) {
  let answer = "";

  let cnt = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] !== s[i]) {
      answer += s[i];
      if (cnt > 1) {
        answer += cnt;
      }
      cnt = 1;
    } else {
      cnt++;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
