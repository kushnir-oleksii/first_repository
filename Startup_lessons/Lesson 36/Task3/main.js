let users = [
    {name: 'Nikola', age:18, id : 1},
    {name: 'Bob', age:25, id : 2},
    {name: 'Mike', age:32, id : 3},
]

  function sayHelloUser(id) {    
    let users = JSON.parse(localStorage.getItem('users'));// отримуємо данні з локального сховища localStorage    
    // let user = users.find(user => user.id === id);// Шукаємо юзера з потрібним id, скорочена формула     
  let user = 0;
  for (let i = 0; i < users.length; i++) {// Шукаємо юзера з потрібним id
    if (users[i].id === id) {
      user = users[i];
      break;
    }
  }    
    if (user) {
      console.log(`Hello: ${user.name}`);// коли знайшли виводимо в консоль
    }
  }  
localStorage.setItem('users', JSON.stringify(users));
sayHelloUser(3);//Hello:Mike


