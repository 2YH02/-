function solution(arr) {
  let answer = "NO";
  let n = arr.length;
  let total = arr.reduce((a, b) => a + b);
  let flag = 0;

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n) {
      if (sum === parseInt(total / 2)) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
