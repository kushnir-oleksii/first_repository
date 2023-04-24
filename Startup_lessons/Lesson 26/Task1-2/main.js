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
    //      {
            // return isAdmin ?  this.#name : 'Permition denied'  
         

    //      }
      
    // }
    else if (this.name = ' ') {
        return console.log(this.login);
    }
    
    }
    
  }
  
  let user1 = new User('Mike', 'MK_18', 18);
  let user2 = new User(' ', 'NRG', 22);
  let user3 = new User('  ', 'RTR', 22);
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
// user1.getName(true)