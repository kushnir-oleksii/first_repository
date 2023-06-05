// let count = 0;
// let mike = { name: "Mike", age: 18 };
// let bob = { name: "Bob", age: 25 };
// let nikola = { name: "Nikola", age: 32 };

// mike.count = 0;
// bob.count = 0;
// nikola.count = 0;

// let siteVisitsCount = function (user) {
//   user.count++;
// };

// let mikeVisits = function (user) {
//   siteVisitsCount(user);
// };
// let bobVisits = function (user) {
//   siteVisitsCount(user);
// };
// let nikolaVisits = function (user) {
//   siteVisitsCount(user);
// };

// mikeVisits(mike);
// mikeVisits(mike);
// mikeVisits(mike);
// bobVisits(bob);
// nikolaVisits(nikola);
// nikolaVisits(nikola);

// let userVisits = new Map();
// userVisits.set(mike, mike.count).set(bob, bob.count).set(nikola, nikola.count);

// console.log(userVisits.get(mike));
// console.log(userVisits.get(bob));
// console.log(userVisits.get(nikola));

// let mike = { name: "Mike", age: 18 };
// let bob = { name: "Bob", age: 25 };
// let nikola = { name: "Nikola", age: 32 };
// let userVisits = new Map();
// function visitsClouser(siteVisits = 0) {
//   let countVisits = siteVisits;
//   return function visits(user) {
//     userVisits.set(user, ++countVisits);
//     return countVisits;
//   };
// }

// let mikeVisits = visitsClouser();
// let bobVisits = visitsClouser();
// let nikolaVisits = visitsClouser();

// mikeVisits(mike);
// mikeVisits(mike);
// mikeVisits(mike);
// bobVisits(bob);
// nikolaVisits(nikola);
// nikolaVisits(nikola);
// console.log(userVisits.get(mike)); //3
// console.log(userVisits.get(bob)); //1
// console.log(userVisits.get(nikola)); //2

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2), add10(7));
