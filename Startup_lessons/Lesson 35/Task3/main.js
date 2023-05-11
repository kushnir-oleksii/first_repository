
function uniqueElements() {
    const items = document.querySelectorAll('.shop-list li');//отримуємо всі елементи списку
    const uniqueItems = new Set();
    
    items.forEach(item => {
      uniqueItems.add(item.textContent);
    });
    
    console.log([...uniqueItems]);
  }
  
  uniqueElements();