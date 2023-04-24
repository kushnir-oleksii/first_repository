class User{
  #name;
  constructor(name, login, age){
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin){
      if (isAdmin == false){
          return console.log('Permission denied')
      }

      else if (this.name = ' ') {
      return console.log(this.login);
      }
  
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
  
  
    constructor(name, login, age){
    super(name, login, age);
  }
  getUserName(user){
    console.log(user.name);
  }
}
  // getUserName(){
  //   let admin = 0;
  //   for (let key in User){
  //     admin += User[key]

  //   }
     
  //     return console.log(this.name);

  //   }
       
// getUserName(){
//     let admin= [];
//     for (let key in this){
//         admin.push (key + ': ' + this[key]);
//     }
//     console.log(admin.join(', '))

// //   let admin = {};
// //   for (let key in User){
// //     if (typeof User[key] === "object")
// //     admin = User[key]
// //   }
// //  return console.log(admin);
//  }
// }

// let obj = {};
// for (key in obj){
//     console.log(key);
// }

  // let admin = new User;
      // if (isAdmin){
      //  for (let i = 0; i = User.length; ++i)
    // else {
    //     let hidePhone = this.#phone.split('');//якщо не адмін, створюємо масив данних, всі значення розділяємо
    //     for (let i = 4; i < 10; ++i){//робимо перебір з 4 елементу по 10
    //         if (i == 7) continue //якщо 7 елементів ?
    //         hidePhone[i] = '*'// елементи  замінюємо на *
    //     }
    //     console.log(hidePhone.join('')); //приєднуємо потім всі елементи
    // }    



let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User(' ', 'NRG', 22);
let user3 = new User('  ', 'RTR', 22);
let admin = new Admin('Admin', 'admin_login', 30);
// let admin1 = new Admin('Mike', 'MK_18', 18);
// let admin = new Admin(' ', 'NRG', 22);
//   getName(isAdmin);
console.log(user1.login);// MK_18
console.log(user1.age);// 18
console.log(user2.login);// NRG
console.log(user2.age);// 22
user1.getName(true);// MK_18
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