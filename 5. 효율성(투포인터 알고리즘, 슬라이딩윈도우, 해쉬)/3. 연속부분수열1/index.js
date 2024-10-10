function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  let path = [];
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum === m) {
      answer++;
      path.push(arr.slice(lt, rt + 1));
    }
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
        path.push(arr.slice(lt, rt + 1));
      }
    }
  }

  console.log(path);
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
