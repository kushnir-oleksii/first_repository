class User{
  #name;
  constructor(name, login, age){
    this.#name = name;
    this.login = login;
    this.age = age;
    }
  getName(isAdmin)  {
    if (!isAdmin) {
      return console.log('Permission denied');
    }
    return console.log(this.#name || this.login);
  }
  ChangeName (newName, password) {
    if (password = '123'){
      let oldName = this.#name//нова змінна яка зберігає старе ім'я, яке  вже є в класі
      this.#name = newName//це вже нове ім'я яке вводиться і перезаписується
      return console.log (`Name changed from ${oldName} to ${this.#name}`)
    }
    return console.log ("Permission denied")
      
  }
  
}
class Admin extends User {
  #isAdmin;  
    constructor(name, login, age){
    super(name, login, age);
  }
  getUserName(user){
    return user.getName(true);//щоб метод приймав юзера,треба додати аргумент в його визначення, тобто getUserName(user). А щоб admin.getUserName(user1) виводив ім'я юзера, в нашому випадку Mike, потрібно всередині метода getUserName(user) викликати метод getName() об'єкту user і повернути його значення
  }
}
 
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);
let user3 = new User('', 'RTR', 22);
let admin = new Admin('Andriy', 'login', 22);

console.log(user1.login);// MK_18
console.log(user1.age);// 18
console.log(user2.login);// NRG
console.log(user2.age);// 22
user1.getName(true);// Mike
user2.getName(true);// NRG
user2.getName(false);//Permission denied
user1.getName(false);//Permission denied
// user1.#name = '112';//error
user3.getName(true);//RTR
user1.ChangeName('Bill', '123');
admin.getUserName(user1);
// user1.getUserName(user1)
// console.log(getUserName(user1));
// Admin.getUserName;
// console.log(admin1);// MK_18
