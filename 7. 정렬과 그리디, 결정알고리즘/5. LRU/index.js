function solution(size, arr) {
  let answer = [];

  for (let x of arr) {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
