function getData(url) {
  fetch(url)
  .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then(data => {
      let userA = document.querySelector(".user-a");
      let userAB = document.querySelector(".user-ab");

      
      let objectsStartWithA = data.filter(obj => obj.title.split('')[0] == 'a');
      objectsStartWithA.forEach(obj => {
          userA.innerHTML += JSON.stringify(obj) + `<br>`
      })

      
      let objectsStartWithAB = objectsStartWithA.filter(obj => {
          let title =obj.title.split('');
      return title[0] + title[1] == 'ab';});

      objectsStartWithAB.forEach(obj => {
          userAB.innerHTML += JSON.stringify(obj) + `<br>`;

      })
      
    })
    .catch((error) => console.log(error.message));
}
  getData('https://jsonplaceholder.typicode.com/todos');

// function getData(url) {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         const userA = document.querySelector(".user-a");
//         const userAB = document.querySelector(".user-ab");
  
//         // Фильтруем объекты, у которых свойство title начинается с "a"
//         const objectsStartingWithA = data.filter(obj => obj.title.startsWith("a"));
  
//         // Записываем отфильтрованные объекты в блок user-a
//         userA.innerHTML = JSON.stringify(objectsStartingWithA,null, `
//         `);
  
//         // Фильтруем объекты, у которых свойство title начинается с "ab"
//         const objectsStartingWithAB = objectsStartingWithA.filter(obj => obj.title.startsWith("ab"));
  
//         // Записываем отфильтрованные объекты в блок user-ab
//         userAB.innerHTML = JSON.stringify(objectsStartingWithAB,null, `
//         `);
//       })
//       .catch(error => console.log(error));
//   }
// getData('https://jsonplaceholder.typicode.com/todos');


// function getData(url) {
//     fetch(url)
//     .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error(`Error: ${response.status}`);
//       })
//       .then(data => {
//         let userA = document.querySelector(".user-a");
//         let userAB = document.querySelector(".user-ab");
  
        
//         let objectsStartWithA = data.filter(obj => obj.title.startsWith("a"));
//         userA.innerHTML = JSON.stringify(objectsStartWithA);
  
        
//         let objectsStartWithAB = objectsStartWithA.filter(obj => obj.title.startsWith("ab"));
//         userAB.innerHTML = JSON.stringify(objectsStartWithAB);
//       })
//       .catch(error => console.log(error));
//   }
//     getData('https://jsonplaceholder.typicode.com/todos');



