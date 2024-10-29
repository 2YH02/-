function solution(arr) {
  let answer = "NO!";
  let total = arr.reduce((a, b) => a + b);
  let n = arr.length;

  const DFS = (L, sum) => {
    if (answer === "YES!" || L > n || sum > total / 2) return;
    if (total / 2 === sum) {
      answer = "YES!";
      return;
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
