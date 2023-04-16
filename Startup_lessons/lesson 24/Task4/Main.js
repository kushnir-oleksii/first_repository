let a = [5, 3, 8, 5, 3, 2, 1, 2]
let b = []

a.forEach (
    function () {
    return b = a.filter((item, index) => a.indexOf(item) === index);
   }
)
console.log (b)


