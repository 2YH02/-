// 배열 돌기
// 선택하기
// 선택한거 +1 부터 다시 돌면서 크기 비교하기
// 바꾸기

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i; // 여기 선택한 index에 들어올 숫자 찾으면서 정렬
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
