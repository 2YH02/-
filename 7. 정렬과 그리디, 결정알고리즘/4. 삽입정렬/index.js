function solution1(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = tmp;
  }
  return answer;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution1(arr));
