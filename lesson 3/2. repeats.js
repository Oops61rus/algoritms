// `B. Номер появления слова
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Во входном файле (вы можете читать данные из файла input.txt) записан текст. Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов или символами конца строки. Для каждого слова из этого текста подсчитайте, сколько раз оно встречалось в этом тексте ранее.
//
// Формат ввода
// Вводится текст.
//
// Формат вывода
// Выведите ответ на задачу.
//
// `


const input = 'one two one tho three';
const input2 = 'She sells sea shells on the sea shore;\n' +
  'The shells that she sells are sea shells I\'m sure.\n' +
  'So if she sells sea shells on the sea shore,\n' +
  'I\'m sure that the shells are sea shore shells.\n' +
  '\n';


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const words = fileContent.toString();


function repeats(words) {
  const string = words.trim().replaceAll('\n', ' ')

  if(!string) {
    return '';
  }

  const map = {};

  const array = string.split(' ').map((word) => {
    if(map[word] === undefined) {
      map[word] = 0
    } else {
      map[word]++
    }

    return map[word];
  })

  return array.join(' ');
}


// const result = repeats(words);
//
// fs.writeFileSync('output.txt', result);

console.log(repeats(input))
console.log(repeats(input2))
console.log(repeats(''))