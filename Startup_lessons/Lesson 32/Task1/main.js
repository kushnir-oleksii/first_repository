// function getData(url) {
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       let filteredData = data.filter(item => item.title.startsWith('a'));
//       return filteredData;
//     });
// }

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));



function getData(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then((data) => {
      let filteredData = data.filter((item) => item.title.startsWith('a'));
      console.log(filteredData);
    })
    .catch((error) => console.log(error.message));
}

getData('https://jsonplaceholder.typicode.com/todos');