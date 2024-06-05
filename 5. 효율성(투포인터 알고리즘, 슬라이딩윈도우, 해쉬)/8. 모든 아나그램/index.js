function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [k, v] of map1) {
    if (!map2.has(k) || map2.get(k) !== v) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let Hs1 = new Map();
  let Hs2 = new Map();

  for (let x of t) {
    if (Hs1.has(x)) Hs1.set(x, Hs1.get(x) + 1);
    else Hs1.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (Hs2.has(s[i])) Hs2.set(s[i], Hs2.get(s[i]) + 1);
    else Hs2.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (Hs2.has(s[rt])) Hs2.set(s[rt], Hs2.get(s[rt]) + 1);
    else Hs2.set(s[rt], 1);
    if (compareMaps(Hs1, Hs2)) answer++;
    Hs2.set(s[lt], Hs2.get(s[lt]) - 1);
    if (Hs2.get(s[lt]) === 0) Hs2.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
