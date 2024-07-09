function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let tmp = x;
    let sum = 0;

    while (tmp) {
      let r = tmp % 10;
      sum += r;

      tmp = parseInt(tmp / 10);
    }

    if (sum > max) {
      answer = x;
      max = sum;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
