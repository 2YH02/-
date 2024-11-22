function solution(s) {
  let answer = 0;

  for (let x of s) {
    let charCode = x.charCodeAt();

    if (charCode >= 65 && charCode <= 90) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
