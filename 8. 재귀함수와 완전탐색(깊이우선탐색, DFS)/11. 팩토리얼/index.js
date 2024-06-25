function solution(n) {
  let answer;

  const DFS = (L) => {
    if (L === 1) return 1;
    else return DFS(L - 1) * L;
  };

  answer = DFS(n);
  return answer;
}

console.log(solution(5));
