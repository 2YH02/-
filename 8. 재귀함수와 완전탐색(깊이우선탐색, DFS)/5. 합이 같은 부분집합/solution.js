function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// function solution(arr) {
//   let answer = "NO";
//   let total = arr.reduce((a, b) => a + b);
//   let n = arr.length;

//   function DFS(L, sum) {
//     if (answer == "YES" || L > n ||sum > total / 2) return;

//     if (total / 2 === sum) {
//       answer = "YES";
//       return;
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }
