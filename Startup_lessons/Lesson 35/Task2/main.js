function uniceString(words) {
    let newWords = words.split(';').map(word => word.trim());
    let uniqueWords = [...new Set(newWords)];
    return uniqueWords.join('; ');
  }
console.log (uniceString("cherry; orange; cherry; banana; banana"))

