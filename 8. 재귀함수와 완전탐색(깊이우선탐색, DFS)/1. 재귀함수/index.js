function solution(n) {
  const DFS = (L) => {
    if (L <= n) {
      console.log(L);
      DFS(L + 1);
    }
  };

  DFS(1);
}

solution(3);
