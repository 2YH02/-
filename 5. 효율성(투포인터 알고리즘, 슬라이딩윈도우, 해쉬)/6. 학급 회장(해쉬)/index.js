function solution(s) {
  let answer;
  let max = 0;
  let Hs = new Map();

  for (let x of s) {
    if (Hs.has(x)) Hs.set(x, Hs.get(x) + 1);
    else Hs.set(x, 1);
  }

  for (let [k, v] of Hs) {
    if (v > max) {
      max = v;
      answer = k;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
