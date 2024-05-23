function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let n = s.length;

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (s[i] !== s[n - i - 1]) answer = "NO";
  }

  return answer;
}

let str = "gododoG";
console.log(solution(str));
