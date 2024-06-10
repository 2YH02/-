function solution(s) {
  let answer = 1;
  let set = new Set();

  for (let x of s) {
    if (set.has(x)) {
      answer++;
      set.clear();
    }

    set.add(x);
  }

  return answer;
}

s = "abacaba";
console.log(solution(s));
