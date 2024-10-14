function solution(need, plan) {
  let answer = "YES";
  need = need.split("");

  for (let x of plan) {
    if (need.includes(x)) {
      if (need.shift() !== x) return "NO";
    }
  }

  if (need.length > 0) return "NO";

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
