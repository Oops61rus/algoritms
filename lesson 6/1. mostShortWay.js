// `A. Самый дешевый путь
// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// В каждой клетке прямоугольной таблицы N×M записано некоторое число. Изначально игрок находится в левой верхней клетке. За один ход ему разрешается перемещаться в соседнюю клетку либо вправо, либо вниз (влево и вверх перемещаться запрещено). При проходе через клетку с игрока берут столько килограммов еды, какое число записано в этой клетке (еду берут также за первую и последнюю клетки его пути).
// Требуется найти минимальный вес еды в килограммах, отдав которую игрок может попасть в правый нижний угол.
//
// Формат ввода
// Вводятся два числа N и M — размеры таблицы (1 ≤ N ≤ 20, 1 ≤ M ≤ 20). Затем идет N строк по M чисел в каждой — размеры штрафов в килограммах за прохождение через соответствующие клетки (числа от 0 до 100).
// Формат вывода
// Выведите минимальный вес еды в килограммах, отдав которую можно попасть в правый нижний угол.
// `


// const input = `5 5
// 1 1 1 1 1
// 3 100 100 100 100
// 1 1 1 1 1
// 2 2 2 2 1
// 1 1 1 1 1
// `
// const [NM, ...CELLS] = input.trim().split('\n');
// const [N, M] = NM.trim().split(' ').map(Number);


const fs = require('fs')
const fileContent = fs.readFileSync("input.txt", "utf8");
const [NM, ...CELLS] = fileContent.toString().trim().split('\n');
const [N, M] = NM.trim().split(' ').map(Number);

function mostShortWay(n, m, cells) {
  for (let col = m - 2; col > -1; col--) {
    cells.at(-1)[col] += cells.at(-1)[col + 1]
  }
  for (let row = n - 2; row > -1; row--) {
    cells[row][cells[row].length - 1] += cells[row + 1].at(-1)
  }
  for(let row = n - 2; row > -1; row--) {
    for (let col = m - 2; col > -1; col--) {
      cells[row][col] += Math.min(cells[row + 1][col], cells[row][col + 1]);
    }
  }

  return cells[0][0];
}

const result = mostShortWay(N, M, CELLS.map(row => row.split(' ').map(Number)));
fs.writeFileSync('output.txt', result.toString());

// console.log(mostShortWay(5, 5,
//   [
//     [1, 1, 1, 1, 1],
//     [3, 100, 100, 100, 100],
//     [1, 1, 1, 1, 1],
//     [2, 2, 2, 2, 1],
//     [1, 1, 1, 1, 1],
//   ]));

console.log(result)
