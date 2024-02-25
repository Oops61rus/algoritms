// `C. НОП с восстановлением ответа
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Даны две последовательности, требуется найти и вывести их наибольшую общую подпоследовательность.
//
// Формат ввода
// В первой строке входных данных содержится число N – длина первой последовательности (1 ≤ N ≤ 1000). Во второй строке заданы члены первой последовательности (через пробел) – целые числа, не превосходящие 10000 по модулю.
//
// В третьей строке записано число M – длина второй последовательности (1 ≤ M ≤ 1000). В четвертой строке задаются члены второй последовательности (через пробел) – целые числа, не превосходящие 10000 по модулю.
//
// Формат вывода
// Требуется вывести наибольшую общую подпоследовательность данных последовательностей, через пробел.
//
// `


const input = `3
1 2 3
3
2 3 1
`

const [n, s1, m, s2] = input.trim().split('\n');
const result = nop(s1.trim().split(' ').map(Number), s2.trim().split(' ').map(Number));
console.log(result)

// const fs = require('fs')
// const fileContent = fs.readFileSync("input.txt", "utf8");
// const [n, s1, m, s2] = fileContent.toString().trim().split('\n');

function nop(seq1, seq2) {
  let width = seq1.length + 1;
  let height = seq2.length + 1;
  let mx = new Array(width * height).fill(0);
  for (let i = 1; i < width; ++i) {
    for (let j = 1; j < height; ++j) {
      if (seq1[i - 1] === seq2[j - 1]) {
        mx[i * height + j] = mx[(i - 1) * height + j - 1] + 1;
      } else {
        mx[i * height + j] = Math.max(mx[(i - 1) * height + j], mx[i * height + j - 1]);
      }
    }
  }

  let ret = [];
  let i = seq1.length;
  let j = seq2.length;
  while (i !== 0 && j !== 0) {
    if (seq1[i - 1] === seq2[j - 1]) {
      ret.push(seq1[i - 1]);
      --i; --j;
    } else if (mx[i * (seq2.length + 1) + j - 1] > mx[(i - 1) * (seq2.length + 1) + j]) {
      --j;
    } else {
      --i;
    }
  }
  ret.reverse();
  return ret.join(' ');
}

// const result = nop(s1.trim().split(' ').map(Number), s2.trim().split(' ').map(Number));
// fs.writeFileSync('output.txt', result.toString());
//
// console.log(nop([1, 2, 3], [2, 3, 1]));
// console.log(nop([1, 2, 3], [3, 2, 1]))
