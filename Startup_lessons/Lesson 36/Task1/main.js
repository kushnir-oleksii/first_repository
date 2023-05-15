



function showAdminName(data) {
    for (let user in data) {//за допомогою циклу перебираємо юзерів на властивсть адмін, якщо вона є то виводимо ім'я у консоль
      if (data[user].isAdmin) {
        console.log(data[user].name);
      }
    }
  }
  

  fetch('http://127.0.0.1:5500/Startup_lessons/Lesson 36/Task1/data.json')
  .then(response => response.json())
    .then(data => showAdminName(data));