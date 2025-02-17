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

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], +1);
  }

  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMaps(sH, tH)) answer++;

    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
