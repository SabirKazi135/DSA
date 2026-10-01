const arr = [14, 7, 22, 9, 31, 5];
const target = 9;
let index;
for (let i = 0; i < arr.length; i++) {
  if (target === arr[i]) {
    index = i;
    break;
  }
}

if (index == undefined) {
  index = -1;
}

console.log(index);
