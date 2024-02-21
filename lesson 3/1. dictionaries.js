// `A. Словарь синонимов
// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Вам дан словарь, состоящий из пар слов. Каждое слово является синонимом к парному ему слову. Все слова в словаре различны. Для одного данного слова определите его синоним.
//
// Формат ввода
// Программа получает на вход количество пар синонимов N. Далее следует N строк, каждая строка содержит ровно два слова-синонима. После этого следует одно слово.
//
// Формат вывода
// Программа должна вывести синоним к данному слову. Примечание
//
// Эту задачу можно решить и без словарей (сохранив все входные данные в списке), но решение со словарем будет более простым.`



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
