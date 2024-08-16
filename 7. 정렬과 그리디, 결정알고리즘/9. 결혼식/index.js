function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];

  times.forEach((v) => {
    T_line.push([v[0], "s"]);
    T_line.push([v[1], "e"]);
  });

  T_line.sort((a, b) =>
    a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]
  );

  let cnt = 0;
  T_line.forEach((v, i) => {
    if (v[1] === "s") cnt++;
    else cnt--;

    answer = Math.max(answer, cnt);
  });

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
