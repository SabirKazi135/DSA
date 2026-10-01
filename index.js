function lastOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let foundAt = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      foundAt = mid;
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return foundAt;
}

console.log(firstOccurrence([2, 4, 4, 4, 7, 9, 12], 4));
// 1

console.log(firstOccurrence([2, 4, 4, 4, 7, 9, 12], 7));
// 4

console.log(firstOccurrence([2, 4, 4, 4, 7, 9, 12], 10));
// -1
