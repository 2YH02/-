function solution(times) {
  let answer = 0;
  let T_line = [];

  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }

  T_line.sort((a, b) => {
    return a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0];
  });

  let tmp = 0;
  for (let x of T_line) {
    if (x[1] === "s") tmp++;
    else tmp--;

    answer = Math.max(tmp, answer);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
