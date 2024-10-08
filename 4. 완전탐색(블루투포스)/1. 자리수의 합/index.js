function solution(n, arr) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x % 10;
    let tmp = Math.floor(x / 10);

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (Number(x) > Number(answer)) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
