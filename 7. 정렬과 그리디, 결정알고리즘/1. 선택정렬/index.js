function solution(arr) {
  let answer = arr;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) idx = j;
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
