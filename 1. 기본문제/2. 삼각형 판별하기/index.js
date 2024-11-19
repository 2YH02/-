function solution(a, b, c) {
  let answer = "YES";
  let total = a + b + c;
  let max;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (total - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
