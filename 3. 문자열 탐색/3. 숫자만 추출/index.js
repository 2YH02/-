function solution(str) {
  let answer = "";

  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }

  answer = Number(answer);
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
