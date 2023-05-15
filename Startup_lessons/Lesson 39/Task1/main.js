

let usersNames = ['Mike', 'Bob', 'Nikola']
let users = {};

for ( newUser of usersNames) {//проходимося по масиву usersNames і додаємо нову властивість в об'єкт users з ключем, який дорівнює іменам тільки вже в нижньому регістрі, і значенням, таким самим як і імена з usersNames . [newUser.toLowerCase()], встановлює ключ динамічно на основі значення змінної newUser.
    users[newUser.toLowerCase()] = newUser;
  }
  
console.log(users);
