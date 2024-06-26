function solution(n, arr) {
  let answer = 0;

  let graph = Array.from(Array(n + 1), () => Array());
  let path = [];

  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  const DFS = (v) => {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i of graph[v]) {
        if (ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          path.pop();
          ch[i] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  path.push(1);
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
