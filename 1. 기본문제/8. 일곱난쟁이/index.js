function solution(arr) {
  let answer = arr;
  let n = arr.length;
  let total = arr.reduce((a, b) => a + b);

  let flag = false;

  for (let i = 0; i < n - 1; i++) {
    if (flag) break;
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];

      if (total - sum === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
