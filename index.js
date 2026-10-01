function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (target === sum) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 10));
// [1, 9]

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 20));
// [9, 11]

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 5));
// [1, 4]

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 15));
// [4, 11]

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 3));
// [1, 2]

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 7));
// [1, 6]

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 100));
// null

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 1));
// null

console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 12));
// [1, 11] OR [4, 8]
