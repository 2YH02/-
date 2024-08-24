function solution(n, m) {
  let answer = [];
  let ch = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(ch.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        ch[L] = i;
        DFS(L + 1);
      }
    }
  };

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
