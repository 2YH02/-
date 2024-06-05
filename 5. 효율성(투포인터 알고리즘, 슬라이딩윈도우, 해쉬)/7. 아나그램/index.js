function solution(str1, str2) {
  let answer = "YES";
  let Hs = new Map();

  for (let x of str1) {
    if (Hs.has(x)) Hs.set(x, Hs.get(x) + 1);
    else Hs.set(x, 1);
  }

  for (let x of str2) {
    if (!Hs.has(x) || Hs.get(x) === 0) answer = "NO";

    Hs.set(x, Hs.get(x) - 1);
  }

  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
