function merge(left, right) {
  const sortedArr = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) sortedArr.push(left[i++]);
    else sortedArr.push(right[j++]);
  }

  return sortedArr.concat(left.slice(i)).concat(right.slice(j));
}

function solution(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(solution(left), solution(right));
}

let arr = [13, 5, 11, 7, 23, 15, 2];
console.log(solution(arr));
