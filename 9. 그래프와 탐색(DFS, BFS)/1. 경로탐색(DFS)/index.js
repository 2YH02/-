function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  const DFS = (v) => {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0 && graph[v][i] === 1) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  };

  path.push(1);
  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
