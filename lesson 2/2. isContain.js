// `B. Встречалось ли число раньше
// Ограничение времени 3 секунды
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Во входной строке записана последовательность чисел через пробел. Для каждого числа выведите слово YES (в отдельной строке), если это число ранее встречалось в последовательности или NO, если не встречалось.
//
// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.
//
// Формат вывода
// Выведите ответ на задачу.
//
// `

// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const numbers = fileContent.toString().split(' ').map(Number);

function isContain(numbers) {
  const set = new Set();

  return numbers.map(value => {
    if(set.has(value)) {
      return 'YES\n'
    } else {
      set.add(value);
      return 'NO\n';
    }
  }).join('');
}

// const result = isContain(numbers);
//
// fs.writeFileSync('output.txt', result.join('\n'))

// console.log(isContain('1 2 3 4 4 4'))
console.log(isContain('1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'.split(' ').map(Number)))
// console.log(isContain())