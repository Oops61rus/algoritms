// const input = `3
// Hello Hi
// Bye Goodbye
// List Array
// sofa couch
// input enter
// beep Car
// Ololo Ololo
// Numbers 1234567890
// Ololo`;

// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const [countWords, ...dictionary] = fileContent.trim().split('\n');
// const word = dictionary.pop()

function dictionaries(countWords, dictionary, word) {
  const dictionaryOne = dictionary.reduce((acc, current) => {
    const words = current.split(' ');

    if(!acc[words[0]]) {
      acc[words[0]] = words[1];
    }

    return acc;
  }, {});

  const dictionaryTwo = dictionary.reduce((acc, current) => {
    const words = current.split(' ');

    if(!acc[words[1]]) {
      acc[words[1]] = words[0];
    }

    return acc;
  }, {});

  return dictionaryOne[word] || dictionaryTwo[word];
}

// const result = dictionaries(countWords, dictionary, word);
//
// fs.writeFileSync('output.txt', result);

// console.log(dictionaries(countWords, dictionary, word));
