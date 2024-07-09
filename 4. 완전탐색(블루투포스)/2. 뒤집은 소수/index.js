function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution1(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0;

    while (x) {
      res = res * 10 + (x % 10);
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution1(arr));
