let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];
let count = [...arr1, ...arr2, ...arr3];
console.log(Math.max(...count));