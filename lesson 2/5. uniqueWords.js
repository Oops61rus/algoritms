// `E. Количество слов в тексте
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Во входном файле (вы можете читать данные из sys.stdin, подключив библиотеку sys) записан текст. Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов или символами конца строки. Определите, сколько различных слов содержится в этом тексте.
//
// Формат ввода
// Вводится текст.
//
// Формат вывода
// Выведите ответ на задачу.`


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const words = fileContent.toString();

function uniqueWords(words) {
  const trimWords = words.replaceAll('\n', ' ').trim();

  if(trimWords.length === 0) {
    return 0;
  }

  const set = new Set(trimWords.split(' '));

  return set.size;
}


// const result = uniqueWords(words);
//
// fs.writeFileSync('output.txt', result.toString())

console.log(uniqueWords('She sells sea shells on the sea shore;\n' +
  'The shells that she sells are sea shells I\'m sure.\n' +
  'So if she sells sea shells on the sea shore,\n' +
  'I\'m sure that the shells are sea shore shells.\n' +
  '\n'));

console.log(uniqueWords(''))