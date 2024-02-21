// `E. Очень легкая задача
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Сегодня утром жюри решило добавить в вариант олимпиады еще одну, Очень Легкую Задачу. Ответственный секретарь Оргкомитета напечатал ее условие в одном экземпляре, и теперь ему нужно до начала олимпиады успеть сделать еще N копий. В его распоряжении имеются два ксерокса, один из которых копирует лист за х секунд, а другой – за y. (Разрешается использовать как один ксерокс, так и оба одновременно. Можно копировать не только с оригинала, но и с копии.) Помогите ему выяснить, какое минимальное время для этого потребуется.
//
// Формат ввода
// На вход программы поступают три натуральных числа N, x и y, разделенные пробелом (1 ≤ N ≤ 2 × 108, 1 ≤ x, y ≤ 10).
//
// Формат вывода
// Выведите одно число – минимальное время в секундах, необходимое для получения N копий.`


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const [required, copy1, copy2 ] = fileContent.toString().trim().split(' ');

function copying(n, x, y) {
  let left = 0
  let right = (n - 1) * Math.max(x, y)

  while (right > left + 1) {
    let mid = Math.floor((right + left) / 2)

    if(Math.floor(mid / x) + Math.floor(mid / y) < n - 1) {
      left = mid
    } else {
      right = mid
    }
  }

  return right + Math.min(x, y)
}

const result = copying(Number(required), Number(copy1), Number(copy2));

fs.writeFileSync('output.txt', result.toString());

// console.log(copying(4, 1, 1))
// console.log(copying(5, 1, 2))