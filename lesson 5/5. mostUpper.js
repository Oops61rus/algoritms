// `E. НВП с восстановлением ответа
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Дана последовательность, требуется найти её наибольшую возрастающую подпоследовательность.
//
// Формат ввода
// В первой строке входных данных задано число N — длина последовательности (1 ≤ N ≤ 1000). Во второй строке задается сама последовательность (разделитель — пробел). Элементы последовательности — целые числа, не превосходящие 10000 по модулю.
//
// Формат вывода
// Требуется вывести наибольшую возрастающую подпоследовательность данной последовательности. Если таких подпоследовательностей несколько, необходимо вывести одну (любую) из них.
//
// `


// const input = `6
// 3 29 5 5 28 6
// `
//
// const [count, numbers] = input.trim().split('\n');
// console.log(mostUpper(numbers.trim().split(' ').map(Number)));


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const [count, numbers] = fileContent.toString().trim().split('\n');

function mostUpper(arr) {
  const n = arr.length
  const d = new Array(n).fill(1);
  const p = new Array(n).fill(-1);

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if(arr[j] < arr[i]) {
        if(1 + d[j] > d[i]) {
          d[i] = 1 + d[j];
          p[i] = j;
        }
      }
    }
  }

  let ans = d[0];
  let pos = 0;

  for (let i = 0; i < n; ++i) {
    if(d[i] > ans) {
      ans = d[i]
      pos = i
    }
  }

  const path = [];

  while (pos !== -1) {
    path.push(arr[pos])
    pos = p[pos]
  }

  return path.reverse();
}

// const result = mostUpper(numbers.trim().split(' ').map(Number));
// fs.writeFileSync('output.txt', result.join(' '));