function count(stable, dist) {
  let cnt = 1;
  let tmp = stable[0];

  for (let i = 0; i < stable.length; i++) {
    if (stable[i] - tmp >= dist) {
      tmp = stable[i];
      cnt++;
    }
  }

  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);

  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
