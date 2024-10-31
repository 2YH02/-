function solution(m, ps, pt) {
  let answer = 0;
  let n = ps.length;

  const DFS = (L, s, t) => {
    if (t > m) return;
    if (L === n) {
      answer = Math.max(answer, s);
    } else {
      DFS(L + 1, s + ps[L], t + pt[L]);
      DFS(L + 1, s, t);
    }
  };

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
