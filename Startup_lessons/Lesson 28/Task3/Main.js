function User (name, age) {
    this.name = name;
    this.age = age
}
let user_1 = new User ('Mike', 18);
let user_2 = Object.create(user_1);
user_2.name = 'Bob';
user_2.age = 25;

console.log(user_1);
console.log(user_2);