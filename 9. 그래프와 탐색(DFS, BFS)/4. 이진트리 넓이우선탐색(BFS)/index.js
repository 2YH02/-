function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    console.log(queue)
    const v = queue.shift();
    answer += v + " ";

    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv <= 7) {
        queue.push(nv);
      }
    }
  }

  return answer;
}

console.log(solution());
