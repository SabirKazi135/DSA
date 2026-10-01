const arr = [10, 5, 8, 10, 3, 10];

let times = 0;
let check = 10;
for (let i = 0; i < arr.length; i++) {
  if (check == arr[i]) {
    times++;
  }
}

console.log(times);
