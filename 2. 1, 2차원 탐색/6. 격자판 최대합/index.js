function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    answer = Math.max(answer, sum1, sum2);
  }

  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[j][j];
      sum2 += arr[n - j - 1][j];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
