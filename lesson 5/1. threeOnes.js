// `A. Три единицы подряд
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// По данному числу N определите количество последовательностей из нулей и единиц длины N, в которых никакие три единицы не стоят рядом.
//
// Формат ввода
// Во входном файле написано натуральное число N, не превосходящее 35.
//
// Формат вывода
// Выведите количество искомых последовательностей. Гарантируется, что ответ не превосходит 231-1.`

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const n = fileContent.toString().trim();

function threeOnes(nums) {
  const arr = Array(35).fill(0);
  arr[1] = 2;
  arr[2] = 4;
  arr[3] = 7;

  let i = 4;

  while (i <= nums) {
    arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3])
    i += 1
  }

  return arr[nums];
}

const result = threeOnes(n);

fs.writeFileSync('output.txt', result.toString());

console.log(threeOnes(1));
console.log(threeOnes(2));
console.log(threeOnes(3));
console.log(threeOnes(4));
console.log(threeOnes(5));
console.log(threeOnes(6));
console.log(threeOnes(7));
console.log(threeOnes(8));
console.log(threeOnes(9));
console.log(threeOnes(10));
console.log(threeOnes(11));
console.log(threeOnes(13));
console.log(threeOnes(14));
console.log(threeOnes(15));
console.log(threeOnes(16));
console.log(threeOnes(17));
console.log(threeOnes(18));
console.log(threeOnes(19));
console.log(threeOnes(20));
console.log(threeOnes(21));
console.log(threeOnes(22));
console.log(threeOnes(23));
console.log(threeOnes(24));
console.log(threeOnes(25));
console.log(threeOnes(26));
console.log(threeOnes(27));
console.log(threeOnes(28));
console.log(threeOnes(29));
console.log(threeOnes(30));