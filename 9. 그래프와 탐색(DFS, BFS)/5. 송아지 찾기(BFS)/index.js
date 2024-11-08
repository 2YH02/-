function solution(s, e) {
  let answer = -1;
  let visited = new Set();

  let queue = [];

  queue.push([s, 0]);

  while (queue.length) {
    let [v, dist] = queue.shift();

    if (v === e) {
      answer = dist;
      break;
    }

    for (let nv of [v + 1, v - 1, v + 5]) {
      if (!visited.has(nv) && nv >= 0) {
        visited.add(nv);
        queue.push([nv, dist + 1]);
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
