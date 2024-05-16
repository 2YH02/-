function solution(arr) {
  let answer = arr;
  let total = arr.reduce((a, b) => a + b);
  let flag = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];

      if (total - sum === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);

        flag = 1;
        break;
      }
    }

    if (flag) break;
  }

  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
