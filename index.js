function removeDuplicates(arr) {
  let left = 0;
  let right = 1;
  while (right <= arr.length - 1) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  arr.length = left + 1;
  return arr;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8]));
