function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution1(arr) {
  let answer = [];

  for (let x of arr) {
    let sum = "";
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (isPrime(Number(sum))) answer.push(Number(sum));
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution1(arr));
