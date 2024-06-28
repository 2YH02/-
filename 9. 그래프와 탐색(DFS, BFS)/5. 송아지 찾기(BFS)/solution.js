function solution(s, e) {
  let queue = [];
  let visited = new Set();
  queue.push([s, 0]); // 현재 위치와 현재까지의 거리를 함께 저장

  while (queue.length) {
    let [v, dist] = queue.shift();

    if (v === e) {
      return dist;
    }

    for (let nv of [v + 1, v - 1, v + 5]) {
      if (!visited.has(nv) && nv >= 0) {
        // 방문하지 않은 노드인지 확인 및 유효한 범위인지 확인
        visited.add(nv);
        queue.push([nv, dist + 1]);
      }
    }
  }

  return -1; // 목표 위치에 도달할 수 없는 경우
}

console.log(solution(8, 3));

// function solution(s, e) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let dis = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   dis[s] = 0;
//   while (queue.length) {
//     let x = queue.shift();
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(8, 3));

// function solution1(s, e) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   let L = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift();
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === e) return L + 1;
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1;
//           queue.push(nx);
//         }
//       }
//     }
//     L++;
//   }
//   return answer;
// }

// console.log(solution1(5, 14));
