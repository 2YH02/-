function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x < answer) answer = x;
  }
  return answer;
}

let arr = [5, 3, 7, 3, 2, 9, 11];
console.log(solution(arr));
