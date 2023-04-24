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

let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);
let user3 = new User('', 'RTR', 22);
//   getName(isAdmin);
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
user1.ChangeName('Bill', '123')//Name changed from Mike to Bill