let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 25];

function srav(New_A, New_B) {
    let maxLength = 0;
    let sumNew_a = 0;
    let sumNew_b = 0;
    New_A.length >= New_B.length
    ? (maxLength = New_A.length)
    : (maxLength = New_B.length);
    for (let i =0; i < maxLength; i++){
        if(New_A[i]) {
            sumNew_a += New_A[i];
        }
        if (New_B[i]) {
            sumNew_b += New_B[i];
        }
    }
    if (sumNew_a > sumNew_b) {
        return console.log("a > b");
    } else if (sumNew_a < sumNew_b) {
    return console.log("a < b");
    }
    return console.log("a == b");
}
srav(a, b);



// for (let i = 0; i < a.length; i++){
//     return c = a[i];}
//     console.log (c)}
//     {
//             if (a.indexOf[i] > b.indexOf[i] ) {
//             return "a > b"
//             }
//             else if (a.indexOf[i] < b.indexOf[i]){
//             return "b < a"
//             }
//             else if (a.indexOf[i] = b.indexOf[i]){
//             return "a = b"
//             }

//          } 
//     }   
// }
// console.log(srav(a,b));


// var a = ['a', 'b', 'c', 'd'];
// var b = ['a', 'b', 'x', 'y', 'z'];
// var c = a.filter (function (n){
//     return  b.indexOf(n) === -1
// })
// console.log(c)
// var c = a.filter(n => b.indexOf(n) === -1);
// console.log(c)

// let a = [1,1,2];
// let b = [3,1,5];

// function srav(a,b) {
    
//     for (let i = 0; i < a.length; i++){ return a
//     }
//         for (let j = 0; j < b.length; j++) {
//             return b
//         }
//     }
// console.log(a[index])
// function srav(a,b) {
    
//     for (let i = 0; i < a.length; i++){
//         for (let j = 0; j < b.length; j++)
        
//             {
//                 if (a[i] > b[j] ) {
//                 return "a > b"
//                 }
//                 else if (a[i] < b[j]){
//                 return "b > a"
//                 }
//                 else if (a[i] = b[j]){
//                 return "a = b"
//                 }

//              } 
//         }   
// }
// console.log(srav(a,b));

// function srav(a,b) {
//     if (a.filter > b.filter) {
// return 'a > b';}
// else if (a.filter < b.filter){
// return 'a < b';
// }
// else if (a.filter = b.filter){
//     return 'a = b';
//     }
// }
// console.log(srav(a,b));

// function equalArrays(a,b) {
     
//     for(let i = 0; i < a.length; i++) // Цикл по всем эле­мен­там
//       if (a[i] > b[i]) return 'a>b';
//       else if (a[i] < b[i]) 
//       return 'b > a'; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны
   
//     return 'b=a'; // Ина­че они рав­ны
//    }
//    console.log(equalArrays(a,b));

// var a = [1, 2, 3, 4, 5],
//     b = [1, 2, 3, 4, 5, 6];

// function diff (a, b) {
//     if (a.length > b.length) {
//         return 'difference(a, b)';
//     } else {
//         return 'da';
//     }
// }

// console.log(diff(b, a));
// let a = [5, 3, -4, 25, 32, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];
// function srav (a,b) {
//     for (let i = 0; i < a.length; i++){
//         if (let j = 0; j < b.length; j++) {
//             if (i > j) {
//             return "a > b";
//         }
//         else if (i < j) {
//             return "a < b"
//         }
//         else if (i === j) {
//             return "a = b"
//         }
//     }
// }



// console.log(srav(a,b));
// {
//     console.log(b[j]);
// }
// function srav() {
//     if (i > j) {
//     return "a > b"
// }
// else if (i < j) {
//     return "a < b"
// }
// else if (i === j) {
//     return "a = b"
// }
// }
