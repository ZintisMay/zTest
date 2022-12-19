function arrayValuesPlusTwo(arr) {
    return arr.map((num) => num + 2);
  }
  
  function tripleArrayValues(arr) {
    return arr.map((num) => num * 3);
  }
  
  function quarterArrayValues(arr) {
    return arr.map((num) => num / 4);
  }
  
  function cubeArrayValues(arr) {
    return arr.map((num) => num ** 3);
  }
  
  function onlySecondLetterOfWords(words) {
    return words.map((w) => w[1]);
  }
  
  function onlyFirstAndLastLettersOfWords(words) {
    return words.map((w) => w[0] + w[w.length - 1]);
  }
  