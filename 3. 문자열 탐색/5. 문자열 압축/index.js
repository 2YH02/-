function solution(s) {
  let answer = "";
  let sum = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      sum++;
    } else {
      answer += s[i];
      if (sum > 1) answer += sum;
      sum = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
