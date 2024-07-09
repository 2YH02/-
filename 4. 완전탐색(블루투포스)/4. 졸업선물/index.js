function solution(m, product) {
  let answer = 0;
  let n = product.length;

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let a = arr[i][0];
    let b = arr[i][1];
    let money = m - (a / 2 + b);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      let total = arr[j][0] + arr[j][1];

      if (total > money) break;
      if (total <= money) {
        money -= total;
        cnt++;
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
