function solution(s, e) {
  let answer = 0;
  let visited = new Set();
  let queue = [];
  queue.push([s, 0]);

  while (queue.length) {
    let [v, dist] = queue.shift();

    if (v === e) {
      return dist;
    }

    for (let nv of [v + 1, v - 1, v + 5]) {
      if (!visited.has(nv) && nv >= 0) {
        visited.add(nv);
        queue.push([nv, dist + 1]);
      }
    }
  }
  queue.push([s, 0]);

  return answer;
}

console.log(solution(5, 14));
