function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return "NO";
  }
  return answer;
}

let str = "gTododotG";
console.log(solution(str));
