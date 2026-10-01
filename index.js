const arr = [10, 20, 30];

arr[arr.length] = 40;

console.log(arr);

arr.length = arr.length - 1;

console.log(arr);
