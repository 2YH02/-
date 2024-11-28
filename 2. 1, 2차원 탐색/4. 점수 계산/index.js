function solution(arr) {
  let answer = 0;

  let num = 1;
  for (let x of arr) {
    if (x === 1) {
      answer += num;
      num++;
    } else {
      num = 1;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
