// `A. Количество различных чисел
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Дан список чисел, который может содержать до 100000 чисел. Определите, сколько в нем встречается различных чисел.
//
// Формат ввода
// Вводится список целых чисел. Все числа списка находятся на одной строке.
//
// Формат вывода
// Выведите ответ на задачу.
// `


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const numbers = fileContent.toString().split(' ');

function differentNumbers(numbers) {
  const set = new Set(numbers.map(Number));

  return set.size;
}

// const result = differentNumbers(numbers);
//
// fs.writeFileSync('output.txt', result.toString())


console.log(differentNumbers('1 2 3 2 1'.split(  ' ')))
console.log(differentNumbers('1 2 3 4 5 6 7 8 9 10'.split(  ' ')))
console.log(differentNumbers('1 2 3 4 5 1 2 1 2 7 3'.split(  ' ')))