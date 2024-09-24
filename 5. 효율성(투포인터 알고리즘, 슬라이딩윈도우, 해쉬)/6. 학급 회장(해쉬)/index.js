function solution(s) {
  let answer;

  let sH = new Map();

  for (let x of s) {
    if (!sH.has(x)) sH.set(x, 1);
    else sH.set(x, sH.get(x) + 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [k, v] of sH) {
    if (v > max) {
      max = v;
      answer = k;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
