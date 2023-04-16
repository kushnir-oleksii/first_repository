let count = 0;
function deepCount(arr) {
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      count++;
      deepCount(elem);
    }else {
      count++
    }
  }
  return count
}
// console.log(deepCount([]));
// console.log(deepCount([1, 2,3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1 ,2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));

