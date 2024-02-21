// `B. Кузнечик
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// У одного из студентов в комнате живёт кузнечик, который очень любит прыгать по клетчатой одномерной доске. Длина доски — N клеток. К его сожалению, он умеет прыгать только на 1, 2, …, k клеток вперёд.
//
// Однажды студентам стало интересно, сколькими способами кузнечик может допрыгать из первой клетки до последней. Помогите им ответить на этот вопрос.
//
// Формат ввода
// В первой и единственной строке входного файла записано два целых числа — N и k .
//
// Формат вывода
// Выведите одно число — количество способов, которыми кузнечик может допрыгать из первой клетки до последней.
//
// `

// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
// const [length, cage] = fileContent.toString().trim().split(' ').map(Number);

function grasshopper(n, k) {
  const a = [1];

  for (let i = 1; i < n + 1; i++) {
    let r = k
    if(i < r) {
      r = i
    }
    a.push(0)
    for (let j = 1; j < r + 1; j++) {
      a[i] = a[i] + a[i - j]
    }
  }

  return a[n]
}

// const result = grasshopper(length, cage);
// fs.writeFileSync('output.txt', result.toString());

console.log(grasshopper(1, 1));
console.log(grasshopper(2, 2));
console.log(grasshopper(3, 2));
console.log(grasshopper(4, 2));
console.log(grasshopper(5, 2));
console.log(grasshopper(6, 2));
console.log(grasshopper(7, 2));
console.log(grasshopper(8, 2));
console.log(grasshopper(8, 3));
console.log(grasshopper(8, 4));
console.log(grasshopper(8, 5));
console.log(grasshopper(8, 6));