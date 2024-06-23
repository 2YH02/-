function solution(arr) {
  let answer;
  let n = arr.length;
  let total = arr.reduce((a, b) => a + b);
  let flag = 0;

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n) {
      if (total / 2 === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum);
      DFS(L + 1, sum + arr[L]);
    }
  };

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
