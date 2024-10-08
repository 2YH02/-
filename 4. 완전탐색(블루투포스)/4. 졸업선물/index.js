function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let path = [];

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      let price = product[j][0] + product[j][1];

      money -= price;

      if (money >= 0) cnt++;
      else break;
    }

    if (cnt > answer) {
      path.push([...product[i]]);
      answer = cnt;
    }
  }

  console.log(path);
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
