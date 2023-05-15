let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName: 'Bob'};
let mike = { lastName: 'Smith'};
let michael = {};

let users = {
    get: function(target, prop) {
      if (prop === 'firstName') {
        return target.firstName;
      } else if (prop === 'lastName') {
        return target.lastName;
      } else {
        return '';
      }
    }
  };

  function getFullInfo(user) {
    let firstName = new Proxy(user, users).firstName;
    let lastName = new Proxy(user, users).lastName;
    if (firstName && lastName) {
      return firstName + ' ' + lastName;
    } else if (firstName) {
      return firstName;
    } else if (lastName) {
      return lastName;
    } else {
      return 'No info';
    }
  }

console.log(getFullInfo(bob));
console.log(getFullInfo(mike));
console.log(getFullInfo(michael));
console.log(getFullInfo(nikola));




// let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
// let bob = {firstName: 'Bob'};
// let mike = { lastName: 'Smith'};
// let michael = {};

// let getFullName = function (user){
//     return `${user.firstName} ${user.lastName}`;
// };

// console.log(getFullName(bob));
// console.log(getFullName(mike));
// console.log(getFullName(michael));
// console.log(getFullName(nikola));

// let user = new Proxy({}, {
//     get: function(target, prop) {
//       if (prop === 'firstName') {
//         return target.firstName || 'No info';
//       } else if (prop === 'lastName') {
//         return target.lastName || 'No info';
//       } else {
//         return target[prop];
//       }
//     }
//   });
  
//   let getFullInfo = function (user){
//     return `${user.firstName} ${user.lastName}`;
//  }


//   console.log(getFullName(bob));
// console.log(getFullName(mike));
// console.log(getFullName(michael));
// console.log(getFullName(nikola));






// let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
// let bob = {firstName: 'Bob'};
// let mike = { lastName: 'Smith'};
// let michael = {};

// let users = {
//     get: function(target, prop) {
//       if (prop === 'firstName' && target.hasOwnProperty('firstName')) {
//         return target.firstName;
//       } else if (prop === 'lastName' && target.hasOwnProperty('lastName')) {
//         return target.lastName;
//       } else {
//         return '';
//       }
//     }
//   };

//   function getFullInfo(user) {
//     let firstName = new Proxy(user, users).firstName;
//     let lastName = new Proxy(user, users).lastName;
//     if (firstName && lastName) {
//       return firstName + ' ' + lastName;
//     } else if (firstName) {
//       return firstName;
//     } else if (lastName) {
//       return lastName;
//     } else {
//       return 'No info';
//     }
//   }

// console.log(getFullInfo(bob));
// console.log(getFullInfo(mike));
// console.log(getFullInfo(michael));
// console.log(getFullInfo(nikola));