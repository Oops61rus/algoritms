// `G. Площадь
// Язык Ограничение времени Ограничение памяти Ввод Вывод
// Все языки 0.5 секунд 64Mb стандартный ввод или input.txt стандартный вывод или output.txt
// GNU C11 7.3 0.3 секунды 256Mb
// GNU c++ 11 4.9 0.3 секунды 256Mb
// GNU c++ 11 x32 4.9 0.3 секунды 256Mb
// GCC 5.4.0 C++14 0.3 секунды 256Mb
// GNU c++ 14 4.9 0.3 секунды 256Mb
// GNU c++17 7.3 0.3 секунды 256Mb
// GCC C++17 0.3 секунды 256Mb
// Городская площадь имеет размер n× m и покрыта квадратной плиткой размером 1× 1. При плановой замене плитки выяснилось, что новой плитки недостаточно для покрытия всей площади, поэтому было решено покрыть плиткой только дорожку по краю площади, а в центре площади разбить прямоугольную клумбу (см. рисунок к примеру). При этом дорожка должна иметь одинаковую ширину по всем сторонам площади. Определите максимальную ширину дорожки, которую можно выложить из имеющихся плиток.
//
// Формат ввода
// Первая и вторая строки входных данных содержат по одному числу n и m (3≤ n ≤ 2× 109, 3≤ m ≤ 2× 109) — размеры площади.
//
// Третья строка содержит количество имеющихся плиток t, 1≤ t< nm.
//
// Обратите внимание, что значение t может быть больше, чем возможное значение 32-битной целочисленной переменной, поэтому необходимо использовать 64-битные числа (тип int64 в языке Pascal, тип long long в C и C++, тип long в Java и C#).
//
// Формат вывода
// Программа должна вывести единственное число — максимальную ширину дорожки, которую можно выложить из имеющихся плиток.`


const input1 = `6
7
38
`

const input2 = `5
20
46
`

const input3 = `20
10
144
`

const input7 = `51
51
2600`

const input17 = `1600000000
1450000000
2310000003500000805
`

const input23 = `2000000000
2000000000
3999999999999999997
`

const input24 = `1999999999
1999999999
3999999995999999978`

const input26 = `1999999999
1999999999
3999999996000000000
`

const [n1, m1, t1] = input1.trim().split('\n')
const [n2, m2, t2] = input2.trim().split('\n')
const [n3, m3, t3] = input3.trim().split('\n')
const [n7, m7, t7] = input7.trim().split('\n')
const [n17, m17, t17] = input17.trim().split('\n')
const [n23, m23, t23] = input23.trim().split('\n')
const [n24, m24, t24] = input24.trim().split('\n')
const [n26, m26, t26] = input26.trim().split('\n')

// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
// const [n, m, t] = fileContent.toString().trim().split('\n').map(Number);

const bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m)

function tiles(squareWidth, squareHeight, tiles) {
  let count = 0

  if(BigInt(tiles) > 100000000) {
    let min = BigInt(0);
    let max = bigIntMax(BigInt(squareWidth), BigInt(squareHeight));

    while (min < max) {
      let mid = (min + max) / BigInt(2)
      let nW = (BigInt(squareWidth) - BigInt(2)) - BigInt(2) * (mid - BigInt(1))
      let nH = BigInt(squareHeight) - BigInt(2) * (mid - BigInt(1))
      let sW = ((BigInt(squareWidth) - BigInt(2) + nW) * mid) / BigInt(2)
      let sH = ((BigInt(squareHeight) + nH) * mid) / BigInt(2)

      let res = BigInt(tiles) - sW * BigInt(2) - sH * BigInt(2)

      if(mid === min || mid === max) {
        return Number(mid)
      }

      if (res < BigInt(0)) {
        max = mid
      } else if (res > BigInt(0)) {
        min = mid
      } else {
        if(count === 0) {
          return Number(mid)
        }
        return Number(mid - BigInt(1))
      }

      count++
    }
  } else {
    let numberT = Number(tiles);
    let numberSquareWidth = Number(squareWidth)
    let numberSquareHeight = Number(squareHeight)

    while (numberT > 0 && numberSquareWidth > 0 && numberSquareHeight > 0) {
      numberT -= (numberSquareWidth - 2) * 2 + numberSquareHeight * 2
      numberSquareWidth -= 2
      numberSquareHeight -= 2

      ++count
    }

    if(numberT === 0) {
      return count
    } else {
      return --count
    }
  }
}

// const result = tiles(n, m, t);
// fs.writeFileSync('output.txt', result.toString());

console.log('test 1 result', tiles(n1, m1, t1), 'correct answer:', 2);
console.log('------------')
console.log('test 2 result', tiles(n2, m2, t2), 'correct answer:', 1);
console.log('------------')
console.log('test 3 result', tiles(n3, m3, t3), 'correct answer:', 3);
console.log('------------')
console.log('test 7 result', tiles(n7, m7, t7), 'correct answer:', 25);
console.log('------------')
console.log('test 17 result', tiles(n17, m17, t17), 'correct answer:', 700000007);
console.log('------------')
console.log('test 23 result', tiles(n23, m23, t23), 'correct answer:', 999999999);
console.log('------------')
console.log('test 24 result', tiles(n24, m24, t24), 'correct answer:', 999999997);
console.log('------------')
console.log('test 26 result', tiles(n26, m26, t26), 'correct answer:', 999999999);