function solution(s) {
  let answer = "YES";
  s = s.toUpperCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let str = "gododoG";
console.log(solution(str));
