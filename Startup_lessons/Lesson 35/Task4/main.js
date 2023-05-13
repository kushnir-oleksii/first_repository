// let userVisits = new Map();

// function mikeVisits(client) {
//   if (userVisits.has(client)) {
//     userVisits.set(client, userVisits.get(client) + 1);
//   } else {
//     userVisits.set(client, 1);
//   }
// }

// function bobVisits(client) {
//     if (userVisits.has(client)) {
//         userVisits.set(client, userVisits.get(client) + 1);
//     } else {
//         userVisits.set(client, 1);
//     }
//   }

//   function nikolaVisits(client) {
//     if (userVisits.has(client)) {
//         userVisits.set(client, userVisits.get(client) + 1);
//     } else {
//         userVisits.set(client, 1);
//     }
//   }


// let mike = {name: 'Mike', age: '18'};
// let bob = {name: 'Bob', age: '25'};
// let nikola = {name: 'Nikola', age: '32'};
// mikeVisits(mike);
// mikeVisits(mike);
// mikeVisits(mike);
// bobVisits(bob);
// nikolaVisits(nikola);
// nikolaVisits(nikola);
// console.log(userVisits.get(mike)); // 3
// console.log(userVisits.get(bob)); // 1
// console.log(userVisits.get(nikola)); // 2

let userVisits = new Map();
let mike = {name: 'Mike', age: '18'};
let bob = {name: 'Bob', age: '25'};
let nikola = {name: 'Nikola', age: '32'};



function clientVisits(siteVisits = 0) {
  let countVisits = siteVisits;
  return function visits(client) {
    userVisits.set(client, ++countVisits)
    return countVisits;
  };
}

let mikeVisits = clientVisits();
let bobVisits = clientVisits();
let nikolaVisits = clientVisits();

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);
console.log(userVisits.get(mike)); // 3
console.log(userVisits.get(bob)); // 1
console.log(userVisits.get(nikola)); // 2