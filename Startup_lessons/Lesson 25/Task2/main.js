let arr = [];
function deepCount(arr) {
   return arr.length
}
console.log(deepCount([]));
console.log(deepCount([1, 2,3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1 ,2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));

