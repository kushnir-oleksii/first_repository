async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    let data = await response.json();
    let filteredData = data.filter((item) => item.title.startsWith('a'));
    console.log('Data:', filteredData);
  } catch (error) {
    console.log(error.message);
  }
}

getData('https://jsonplaceholder.typicode.com/todos');
