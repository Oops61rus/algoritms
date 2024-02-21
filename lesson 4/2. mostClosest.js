// `B. Приближенный двоичный поиск
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Для каждого из чисел второй последовательности найдите ближайшее к нему в первой.
//
// Формат ввода
// В первой строке входных данных содержатся числа N и K (). Во второй строке задаются N чисел первого массива, отсортированного по неубыванию, а в третьей строке – K чисел второго массива. Каждое число в обоих массивах по модулю не превосходит 2⋅109.
//
// Формат вывода
// Для каждого из K чисел выведите в отдельную строку число из первого массива, наиболее близкое к данному. Если таких несколько, выведите меньшее из них.`


// const input = `5 5
// 1 3 5 7 9
// 2 4 8 1 6
// `

// const input = `6 11
// 1 1 4 4 8 120
// 1 2 3 4 5 6 7 8 63 64 65
// `
//
const input = `10 10
-5 1 1 3 5 5 8 12 13 16
0 3 7 -17 23 11 0 11 15 7
`

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const [count, a, b] = fileContent.toString().trim().split('\n');

function binSearch(sortedArray, target) {
  let start = 0;
  let end = sortedArray.length - 1;

  if(target <= sortedArray[start]) {
    return sortedArray[start];
  }

  if(target >= sortedArray[end]) {
    return sortedArray[end];
  }

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === target) {
      return sortedArray[middle]
    } else if (sortedArray[middle] < target) {
      if(sortedArray[middle + 1] > target) {
        if(target - sortedArray[middle] > sortedArray[middle + 1] - target) {
          return sortedArray[middle + 1];
        } else {
          return sortedArray[middle]
        }
      } else {
        start = middle + 1;
      }
    } else {
      if(sortedArray[middle - 1] < target) {
        if(target - sortedArray[middle - 1] > sortedArray[middle] - target) {
          return sortedArray[middle]
        } else {
          return sortedArray[middle - 1]
        }
      } else {
        end = middle - 1;
      }
    }
  }
}

function mostClosest(sortedArray, findArray) {
  return findArray.map(el => binSearch(sortedArray, Number(el))).join('\n')
}

// const result = mostClosest(a.trim().split(' ').map(Number), b.trim().split(' '));
//
// fs.writeFileSync('output.txt', result.toString());

const [count, a, b] = input.trim().split('\n')
console.log(mostClosest(a.trim().split(' ').map(Number), b.trim().split(' ').map(Number)));

// console.log(
//   a.trim().split(' ').map(Number),
//   b.trim().split(' ').map(Number),
// )




// function binSearch(sortedArray, target) {
//   let start = 0
//   let end = sortedArray.length - 1
//
//   while (end - start > 1) {
//     const mid = Math.floor((end + start) / 2);
//
//     if(Number(sortedArray[mid]) < target) {
//       start = mid
//     } else {
//       end = mid
//     }
//   }
//
//   if (target - Number(sortedArray[start]) <= Number(sortedArray[end]) - 1) {
//     return sortedArray[start]
//   } else {
//     return sortedArray[end]
//   }
// }
//
// function mostClosest(sortedArray, findArray) {
//   return findArray.map(el => binSearch(sortedArray, Number(el))).join('\n')
// }
