// `C. Быстрый поиск в массиве
// Ограничение времени 3 секунды
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Дан массив из
// N
//  целых чисел. Все числа от
// −
// 1
// 0
// 9
//  до
// 1
// 0
// 9
// .
// Нужно уметь отвечать на запросы вида “Cколько чисел имеют значения от
// L
//  до
// R
// ?”.
//
// Формат ввода
// Число
// N
//  (
// 1
// ≤
// N
// ≤
// 1
// 0
// 5
// ). Далее
// N
//  целых чисел.
// Затем число запросов
// K
//  (
// 1
// ≤
// K
// ≤
// 1
// 0
// 5
// ).
// Далее
// K
//  пар чисел
// L
// ,
// R
//  (
// −
// 1
// 0
// 9
// ≤
// L
// ≤
// R
// ≤
// 1
// 0
// 9
// ) — собственно запросы.
//
// Формат вывода
// Выведите
// K
//  чисел — ответы на запросы.`



const input = `5
10 1 10 3 4
4
1 10
2 9
3 4
2 2
`

const [countNumbers, array, countResults, ...results] = input.trim().split('\n')


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
// const [countNumbers, array, countResults, ...results] = fileContent.toString().trim().split('\n');

function getNum(arr, key, start, isEnd) {
  let left = start
  let right = arr.length

  while (left < right) {
    let mid = Math.floor((right + left) / 2)

    const condition = isEnd ? Number(arr[mid]) <= key : Number(arr[mid]) < key

    if(condition) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

function find(sortedArray, nums) {
  const res = []

  for (let i = 0; i < nums.length; i++) {
    const numArr = nums[i].split(' ').map(Number)
    res.push(
      getNum(sortedArray, numArr[1], getNum(sortedArray, numArr[0], 0, false), true) - getNum(sortedArray, numArr[0], 0, false)
    )
  }

  return res.join(' ')
}

// const result = find(array.trim().split(' ').map(Number).sort((a, b) => a - b), results);
//
// fs.writeFileSync('output.txt', result.toString());

console.log(find(array.trim().split(' ').map(Number).sort((a, b) => a - b), results));
