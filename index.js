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

function fistOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let foundAt = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      foundAt = mid;
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return foundAt;
}

const arr = [1, 3, 3, 3, 3, 6, 8, 8, 10, 12];
const target = 8;

const first = fistOccurrence(arr, target);
const last = lastOccurrence(arr, target);
let result = 0;
if (first !== -1 && last !== -1) {
  result = last - first + 1;
  console.log(result);
} else {
  console.log("not found");
}
