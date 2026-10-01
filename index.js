function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (target === sum) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
console.log(twoSumSorted([1, 2, 4, 6, 8, 9, 11], 10));
// Expected: [2, 3]

console.log(twoSumSorted([3, 7, 11, 15, 19, 24], 22));
// Expected: [1, 4]

console.log(twoSumSorted([1, 2, 3, 4, 5], 9));
// Expected: [3, 4]

console.log(twoSumSorted([1, 3, 5, 7, 9], 20));
// Expected: null

console.log(twoSumSorted([1, 2, 5, 8, 10], 3));
// Expected: [0, 1]

console.log(twoSumSorted([-10, -4, -1, 2, 6, 9], 5));
// Expected: [1, 5]

console.log(twoSumSorted([1, 2, 2, 4, 6], 4));
// Expected: [1, 2]
