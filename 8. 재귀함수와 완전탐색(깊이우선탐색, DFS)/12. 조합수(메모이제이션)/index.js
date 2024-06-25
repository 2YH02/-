function solution(n, r) {
  let answer;
  let mm = Array.from(Array(35), () => Array(35).fill(0));

  const DFS = (n, r) => {
    if (mm[n][r] > 0) return mm[n][r];
    if (n === r || r === 0) return 1;
    else return (mm[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
