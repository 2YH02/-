function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  // 큐 가 비어있으면 탐색 완료
  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + " ";
    // v에서 연결된 경로 큐에 push
    // 그냥 2줄로 v * 2, v * 2 + 1 각각 push해도 됨
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
