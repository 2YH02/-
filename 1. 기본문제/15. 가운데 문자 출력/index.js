function solution(s) {
  let answer = "";
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s.substr(mid - 1, 2);
  } else {
    answer = s.substr(mid, 1);
  }
  return answer;
}
console.log(solution("study"));
