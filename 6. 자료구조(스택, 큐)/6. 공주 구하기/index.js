function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length) {
    for (let i = 0; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.pop();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
