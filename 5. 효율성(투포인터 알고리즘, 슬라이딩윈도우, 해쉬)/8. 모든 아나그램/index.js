function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [k, v] of map1) {
    if (!map2.has(k) || map2.get(k) !== v) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH1 = new Map();
  let sH2 = new Map();

  let path = [];

  for (let i = 0; i < t.length - 1; i++) {
    if (sH1.has(s[i])) sH1.set(s[i], sH1.get(s[i]) + 1);
    else sH1.set(s[i], 1);
  }

  for (let x of t) {
    if (sH2.has(x)) sH2.set(x, sH2.get(x) + 1);
    else sH2.set(x, 1);
  }

  let lt = 0;

  for (let i = t.length - 1; i < s.length; i++) {
    if (sH1.has(s[i])) sH1.set(s[i], sH1.get(s[i]) + 1);
    else sH1.set(s[i], 1);

    if (compareMaps(sH1, sH2)) {
      answer++;
      path.push(Array.from(sH1));
    }

    sH1.set(s[lt], sH1.get(s[lt]) - 1);
    if (sH1.get(s[lt]) === 0) sH1.delete(s[lt]);
    lt++;
  }

  console.log(path);

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
