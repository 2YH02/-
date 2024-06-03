function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;

  let path = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        if (arr[k].indexOf(i) < arr[k].indexOf(j)) cnt++;
      }

      if (cnt === 3) {
        answer++;
        path.push([i, j]);
      }
    }
  }
  console.log(path);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
