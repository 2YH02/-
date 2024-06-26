function solution(n, f) {
  let answer;

  let flag = 0;

  let memo = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);

  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);

  const combi = (n, r) => {
    if (memo[n][r] > 0) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
  };

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  const DFS = (L, sum) => {
    if (flag) return;
    if (sum === f && L === n) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + p[L] * b[L]);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
