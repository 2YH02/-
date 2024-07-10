function solution(arr) {
  const path = [];

  const DFS = (v, cPath) => {
    if (v >= arr.length) return;

    const li = 2 * v + 1;
    const ri = 2 * v + 2;

    cPath.push(arr[v]);

    if (li >= arr.length && ri >= arr.length) {
      const num = parseInt(cPath.join(""), 10);
      path.push(num);
    } else {
      DFS(li, [...cPath]);
      DFS(ri, [...cPath]);
    }
  };

  DFS(0, []);

  return path;
}

// let a = [1, 3, 5];
let a = [4, 9, 0, 5, 1];
console.log(solution(a));
