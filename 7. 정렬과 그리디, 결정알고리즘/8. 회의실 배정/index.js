function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let et = 0;
  for (let x of meeting) {
    if (x[1] >= et) {
      answer++;
      et = x[1];
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
