function solution(s) {
  let answer;

  answer = s.filter((v, i) => {
    return i === s.indexOf(v);
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
