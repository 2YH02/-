// 결국 파스칼로 더해나아가면 1 2 2 2 3 3 3 4 (1 3 3 1)
// 이런식으로 각 숫자의 개수가 정해져 있음 (1 2 3 4 순서라는 가정)
// 여기서 각 숫자의 개수(1 3 3 1)는 콤비네이션임
// 예시에서는 3C0 3C1 3C2 3C3 이 됨.
// 따라서 각각 숫자에 해당하는 콤비네이션 값을 곱해주면 됨
// 1 * 1, 2 * 3, 3 * 3, 4 * 1

function solution(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 메모이제이션
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크
  let p = Array.from({ length: n }, () => 0); // 순열 저장
  let b = Array.from({ length: n }, () => 0); // 조합 수 ex>1331
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
