function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 === 1) answer = s[mid];
  else answer = `${s[mid - 1]}${s[mid]}`;

  return answer;
}
console.log(solution("study"));
