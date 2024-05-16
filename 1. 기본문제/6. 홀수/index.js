function solution(arr) {
  let answer = [];
  let max = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;

      if (x < max) max = x;
    }
  }

  answer.push(max);
  answer.push(sum);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
