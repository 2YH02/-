function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0); // i시간의 최대 점수
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    // 앞에서부터 돌면 중복사용, 뒤에서 돌면서 조합으로
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
