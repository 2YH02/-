function solution(arr) {
  let answer = [];

  let negatives = [];
  let positives = [];

  for (let x of arr) {
    if (x < 0) {
      negatives.push(x);
    } else {
      positives.push(x);
    }
  }

  answer = negatives.concat(positives);
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
