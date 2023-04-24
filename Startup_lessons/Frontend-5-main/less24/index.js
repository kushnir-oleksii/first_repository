// class mobilePhone {
//   constructor(brand, model, price, ram, weight) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.ram = ram;
//     this.weight = weight;
//   }
//   greatings() {
//     console.log(`Welcome to the ${this.brand}`);
//   }
// }

// const samsungS21 = new mobilePhone("Samsung", "S21", 700, "6 GB", "172 grams");

// console.log(samsungS21);
// samsungS21.greatings();
// class User {
//   #password;
//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }
//   getPassword(isAdmin) {
//     return isAdmin ? this.#password : "***";
//   }
// }
// let user1 = new User("Mike", "12345");
// let user2 = new User("Nykola", "56789");
// console.log(user1.name); // Mike
// console.log((user1.name = "Adam")); // Adam
// console.log(user1.getPassword(false)); // ***
// console.log(user1.getPassword(true)); // 12345
// console.log(user2.#password); // Error
// console.log((user2.#password = "1111")); // Error

class Pets {
  constructor(name) {
    this.name = name;
  }
  jump() {
    console.log(`${this.name} is jumping`);
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Cat extends Pets {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  landing() {
    console.log(`${this.name} always lands on its feet`);
  }
  jump() {
    super.jump(); // call from Pets
    this.landing();
    //console.log(`My cat ${this.name} is jumping`);
  }
}
const Muhtar = new Pets("Muhtar");
const Kyzia = new Cat("Kyzia", "Home");

console.log(Muhtar);
console.log(Kyzia);
