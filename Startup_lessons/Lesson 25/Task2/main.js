// //Определяем массив
// var arr = [1 ,2, [3, 4, [5]]];
// //Узнаём число элементов массива, применяем к нему свойство length
// var countElementsArr = arr.length;
// //Распечатываем результат в консоль
// console.log(countElementsArr);


// let arr = [];
// let count = 0;
// function deepCount(arr) {
// let countElementsArr = arr.length;
// }
// function deepCount(arr) {
   
//    count = count + arr.length
//    function inside (o) {
//        return o.length
//    }
//    for (i in arr) {
//        if (typeof arr[i] === 'object') {
//            count = count + inside(arr[i])
//        }
//    }
   
//    return count
// }
// deepCount([1, 2, [3, 4, [5]]])
// console.log(deepCount([]));
// console.log(deepCount([1, 2,3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1 ,2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));


// let arr = [];
// let count = 0;
// function deepCount(arr) {
//    for (let Object of arr) {
//      if (Array.isArray(Object)) {
//        count++;
//        deepCount(Object);
//      }else {
//        count++ 
//      } 
//    } 
//    return count 
//  } 
// console.log(deepCount([]));
// console.log(deepCount([1, 2,3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1 ,2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));

// function deepCount(arr) {
//    return arr.length
// }
// console.log(deepCount([]));
// console.log(deepCount([1, 2,3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1 ,2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));

// let arr = [1, 2, [3, 4, [5]]];

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