function solution(times) {
  let answer = 0;

  let t_line = [];

  for (let x of times) {
    t_line.push(["s", x[0]]);
    t_line.push(["e", x[1]]);
  }

  t_line.sort((a, b) =>
    a[1] === b[1] ? a[0].charCodeAt() - b[0].charCodeAt() : a[1] - b[1]
  );

  let sum = 0;
  for (let x of t_line) {
    if (x[0] === "s") {
      sum++;
    } else {
      sum--;
    }

    answer = Math.max(sum, answer);
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
