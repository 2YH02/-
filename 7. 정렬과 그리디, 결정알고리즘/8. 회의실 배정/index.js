function solution(meeting) {
  let answer = 1;
  meeting.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let ls = meeting[0][1];

  for (let x of meeting) {
    if (x[0] === ls) {
      ls = x[1];
      answer++;
    }
  }

  return answer;
}

// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
