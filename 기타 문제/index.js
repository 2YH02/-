function solution(diffs, times, limit) {
  let answer = Number.MAX_SAFE_INTEGER;

  let lt = 1;
  let rt = Math.max(...diffs);

  while (lt <= rt) {
    let level = parseInt((lt + rt) / 2);
    let sum = 0;

    for (let i = 0; i < diffs.length; i++) {
      let diff = diffs[i];
      let time_cur = times[i];
      let time_prev = times[i - 1] || 0;

      if (diff <= level) {
        sum += time_cur;
      } else {
        let op = (time_cur + time_prev) * (diff - level) + time_cur;
        sum += op;
      }
    }

    if (sum <= limit) {
      rt = level - 1;
    } else {
      lt = level + 1;
    }
  }

  return answer;
}

solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723);
