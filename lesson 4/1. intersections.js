// `A. Двоичный поиск
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Реализуйте двоичный поиск в массиве
//
// Формат ввода
// В первой строке входных данных содержатся натуральные числа N и K (). Во второй строке задаются N элементов первого массива, а в третьей строке – K элементов второго массива. Элементы обоих массивов - целые числа, каждое из которых по модулю не превосходит 109
//
// Формат вывода
// Требуется для каждого из K чисел вывести в отдельную строку "YES", если это число встречается в первом массиве, и "NO" в противном случае.`


// const a = ['1', '61', '126', '217', '2876', '6127', '39162', '98126', '712687', '1000000000'];
// const b = ['100', '6127', '1', '61', '200', '-10000', '1', '217', '10000', '1000000000'];

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [count, a, b] = fileContent.toString().trim().split('\n');

function binSearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return 'YES';
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return 'NO';
}

function intersections(sortedArray, findElements) {
  return findElements.map(element => binSearch(sortedArray, element)).join('\n');
}

const result = intersections(a.split(' ').map(Number), b.split(' ').map(Number));

fs.writeFileSync('output.txt', result);