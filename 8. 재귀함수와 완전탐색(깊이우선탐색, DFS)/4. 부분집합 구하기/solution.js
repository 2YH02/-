function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 각 숫자가 참여 한다 안한다 구분
  function DFS(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // 결국 포함 한다 안한다 두갈래
      ch[L] = 1; // 포함 체크
      DFS(L + 1); // 포함 갈래
      ch[L] = 0; // 불포함 채크
      DFS(L + 1); // 불포함 갈래
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
