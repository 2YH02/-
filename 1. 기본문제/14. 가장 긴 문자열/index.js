function solution(s) {
  let answer;
  let maxLength = 0;

  for (let x of s) {
    if (x.length > maxLength) {
      answer = x;
      maxLength = x.length;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
