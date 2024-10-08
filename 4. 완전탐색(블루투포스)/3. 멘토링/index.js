function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;

  let path = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      let sum = 0;

      for (let k = 0; k < m; k++) {
        let idx1 = test[k].indexOf(i);
        let idx2 = test[k].indexOf(j);

        if (idx1 < idx2) sum++;
        else break;
      }

      if (sum === m) {
        path.push([i, j]);
        answer++;
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
