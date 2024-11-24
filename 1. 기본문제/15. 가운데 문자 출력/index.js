function solution(s) {
  let answer = "";
  let mid = Math.ceil(s.length / 2);

  if (mid % 2 === 1) {
    answer = s.slice(mid - 1, mid);
  } else {
    answer = s.slice(mid - 1, mid + 1);
  }
  return answer;
}
console.log(solution("stdy"));
