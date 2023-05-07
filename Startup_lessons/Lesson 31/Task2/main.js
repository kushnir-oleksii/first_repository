

// Існує така HTML розмітка

//   <a href="site.ua/ua/page_1"></a>
//   <a href="site.ua/ua/page_2"></a>
//   <a href="site.ua/en/page_1"></a>
//   <a href="site.ua/en/page_2"></a>
//   <p><span><a href="site.ua/ua/page_3"></a></span></p>
//   <div><a href="site.ua/en/page_3"></a></div>

// посилання на сайті site.ua розділені мовними префіксами /ua/ (для української ) та /en/ (для англійської), знайдіть всі посилання з українськими сторінками.

let links = document.querySelectorAll('a[href*="/ua/"]');//шукаємо всі посилання (<a>) з атрибутом href, включаючи підстроку "/ua/". 

for (let uaLinks of links)
console.log(uaLinks)

