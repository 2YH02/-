function solution(a, b, c) {
  let answer = "No";
  let max = Number.MIN_SAFE_INTEGER;
  let total = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (total - max > max) answer = "YES";

  return answer;
}

console.log(solution(6, 7, 11));
