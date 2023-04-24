let car = {
    type: 'electric',
    wheels: 4
};

let sportCar = {
    doors : 2
};

let passengerCar = {
    doors: 4
};

let toyCar = {
    type: 'toy',
}

Object.setPrototypeOf (sportCar, car);
Object.setPrototypeOf (passengerCar, car);
Object.setPrototypeOf (toyCar, sportCar);
console.log(sportCar);
console.log(passengerCar);
console.log(toyCar);


// let userRules = {
//     read: true,
//     comments: true
// }
// let managerRules = {
//     edit: true,
// }
// Object.setPrototypeOf(managerRules, userRules);
// console.log(managerRules);//{edit: true}
// console.log(managerRules.read);//true
// console.log(Object.getPrototypeOf(managerRules) === userRules); //true


