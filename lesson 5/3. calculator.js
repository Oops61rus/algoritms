// `C. Калькулятор
// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Имеется калькулятор, который выполняет следующие операции:
//
// умножить число X на 2;
// умножить число X на 3;
// прибавить к числу X единицу.
// Определите, какое наименьшее количество операций требуется, чтобы получить из числа 1 число N.
//
// Формат ввода
// Во входном файле написано натуральное число N, не превосходящее 106.
//
// Формат вывода
// В первой строке выходного файла выведите минимальное количество операций. Во второй строке выведите числа, последовательно получающиеся при выполнении операций. Первое из них должно быть равно 1, а последнее N. Если решений несколько, выведите любое.`


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const N = fileContent.toString().trim();

function calculator(n) {
  const dp = new Array(n + 1).fill(Infinity)
  dp[1] = 0

  for (let i = 1; i <= n; i++) {
    if (i * 2 <= n && dp[i * 2] > dp[i] + 1) {
      dp[i * 2] = dp[i] + 1
    }
    if (i * 3 <= n && dp[i * 3] > dp[i] + 1) {
      dp[i * 3] = dp[i] + 1
    }
    if (i + 1 <= n && dp[i + 1] > dp[i] + 1) {
      dp[i + 1] = dp[i] + 1
    }
  }

  let current = n
  const operations = [n]

  while (current !== 1) {
    if (current % 2 === 0 && dp[current / 2] === dp[current] - 1) {
      operations.push(current / 2)
      current /= 2
    } else if (current % 3 === 0 && dp[current / 3] === dp[current] - 1) {
      operations.push(current / 3)
      current /= 3
    } else {
      operations.push(current - 1)
      current -= 1
    }
  }

  return `${dp[n]}\n${operations.reverse().join(' ')}`
}

const result = calculator(Number(N));
fs.writeFileSync('output.txt', result);

console.log(calculator(1), '\n');
console.log(calculator(2), '\n');
console.log(calculator(3), '\n');
console.log(calculator(4), '\n');
console.log(calculator(5), '\n');
console.log(calculator(50), '\n');