function solution(arr) {
  let answer = 0;
  let score = 1;

  for (let x of arr) {
    if (x === 1) {
      answer += score;
      score += 1;
    } else {
      score = 1;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
