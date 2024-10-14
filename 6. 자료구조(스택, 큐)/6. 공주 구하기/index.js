function solution(n, k) {
  let answer = 0;

  let queue = Array.from({ length: n }, (_, i) => i + 1);

  let cnt = 1;
  while (queue.length > 1) {
    let s = queue.shift();
    if (cnt !== k) {
      queue.push(s);
    } else {
      cnt = 0;
    }
    cnt++;
  }

  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
