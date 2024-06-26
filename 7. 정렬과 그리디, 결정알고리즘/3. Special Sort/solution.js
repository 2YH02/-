function solution1(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

function solution3(arr) {
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
console.log(solution1(arr));
