// `D. Частотный анализ
// Ограничение времени\t2 секунды
// Ограничение памяти\t64Mb
// Ввод\tстандартный ввод или input.txt
// Вывод\tстандартный вывод или output.txt
// Дан текст. Выведите все слова, встречающиеся в тексте, по одному на каждую строку. Слова должны быть отсортированы по убыванию их количества появления в тексте, а при одинаковой частоте появления — в лексикографическом порядке. Указание. После того, как вы создадите словарь всех слов, вам захочется отсортировать его по частоте встречаемости слова. Желаемого можно добиться, если создать список, элементами которого будут кортежи из двух элементов: частота встречаемости слова и само слово. Например, [(2, 'hi'), (1, 'what'), (3, 'is')]. Тогда стандартная сортировка будет сортировать список кортежей, при этом кортежи сравниваются по первому элементу, а если они равны — то по второму. Это почти то, что требуется в задаче.
//
// Формат ввода
// Вводится текст.
//
// Формат вывода
// Выведите ответ на задачу.`


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const text = fileContent.toString();

function frequency(text) {
  const words = text.replaceAll('\n', ' ').trim();

  if(!words) {
    return '';
  }

  const array = words.split(' ');

  const map = array.reduce((acc, currentValue) => {
    if(!acc[currentValue]) {
      acc[currentValue] = 1;
    } else {
      acc[currentValue]++;
    }

    return acc;
  }, {});

  return Object.entries(map).sort((x, y) => {
    if(y[1] === x[1]) {
      if(y[0] > x[0]) {
        return -1;
      } else if(y[0] < x[0]) {
        return 1;
      } else {
        return 0;
      }
    }

    return y[1] - x[1]
  }).map(([text]) => text).join('\n');
}

// const result = frequency(text);
//
// fs.writeFileSync('output.txt', result);

console.log(frequency(`hi
hi
what is your name
my name is bond
james bond
my name is damme
van damme
claude van damme
jean claude van damme
`));

// frequency(`hi
// hi
// what is your name
// my name is bond
// james bond
// my name is damme
// van damme
// claude van damme
// jean claude van damme
// `);