function solution(a, b, c) {
  let answer = Number.MAX_SAFE_INTEGER;
  if (a < b) answer = a;
  else answer = b;

  if (answer > c) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
