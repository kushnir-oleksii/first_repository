// let a = [5, 3, 8, 5, 3, 2, 1, 2]
// let b = []

// let makeUniq = (a) => {
//     return b = a.filter((el, id) => a.indexOf(el) === id);
//   }
  
//   makeUniq(a);
//   console.log(b)

let a = [5, 3, 8, 5, 3, 2, 1, 2]
let b = []

a.forEach (
    function (el,id) {
    return b = a.filter((el, id) => a.indexOf(el) === id);
   }
)
console.log (b)