function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [k, v] of map1) {
    if (!map2.has(k) || map2.get(k) !== v) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  let n = t.length - 1;
  let m = s.length;

  for (let x of t) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let i = 0; i < n; i++) {
    if (tH.has(s[i])) tH.set(s[i], tH.get(s[i]) + 1);
    else tH.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = n; rt < m; rt++) {
    if (tH.has(s[rt])) tH.set(s[rt], tH.get(s[rt]) + 1);
    else tH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    tH.set(s[lt], tH.get(s[lt]) - 1);
    if (tH.get(s[lt]) === 0) tH.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
