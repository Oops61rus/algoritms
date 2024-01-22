// Напишите программу, которая по изображению поля для игры в «Крестики-нолики» определит, могла ли такая ситуация возникнуть в результате игры с соблюдением всех правил.
// Напомним, что игра в «Крестики-нолики» ведется на поле 3*3. Два игрока ходят по очереди. Первый ставит крестик, а второй – нолик. Ставить крестик и нолик разрешается в любую еще не занятую клетку поля. Когда один из игроков поставит три своих знака в одной горизонтали, вертикали или диагонали, или когда все клетки поля окажутся заняты, игра заканчивается.
//
// Формат ввода
// Вводится три строки по три числа в каждой, описывающих игровое поле. Число 0 обозначает пустую клетку, 1 – крестик, 2 – нолик. Числа в строке разделяются пробелами.
//
// Формат вывода
// Требуется вывести слово YES, если указанная ситуация могла возникнуть в ходе игры, и NO в противном случае.
//
// Пример 1
// Ввод	Вывод
// 1 1 1
// 1 1 1
// 1 1 1
// NO
//
// Пример 2
// Ввод	Вывод
// 2 1 1
// 1 1 2
// 2 2 1
// YES
//
// Пример 3
// Ввод	Вывод
// 1 1 1
// 2 0 2
// 0 0 0
// YES
//
// Пример 4
// Ввод
// 0 0 0
// 0 1 0
// 0 0 0
// Вывод
// YES


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const game = fileContent.toString();

function ticTacToe(game) {
  const solution = game.split('\n').map(string => string.split(' ').map(Number));
  let k = 0;
  let one = 0;
  let two = 0;
  let b1, b2, b3, b4, b5, b6, b7, b8;
  b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = 0;
  let forTwo = 0;

  for (let i = 0; i < solution.length; i++) {
    for (let j = 0; j < solution[i].length; j++) {
      if (solution[i][j] === 1) {
        one += 1;
      } else if (solution[i][j] === 2) {
        two += 1;
      }
    }
  }

  if (solution[0][0] === solution[0][1] && solution[0][0] === solution[0][2] && solution[0][0] !== 0) {
    k += 1
    b1 = 1
    if (solution[0][2] === 2) {
      forTwo = 1
    }
  }

  if (solution[1][0] === solution[1][1] && solution[1][0] === solution[1][2] && solution[1][0] !== 0) {
    k += 1
    b7 = 1
    if (solution[1][2] === 2) {
      forTwo = 1
    }
  }

  if (solution[2][0] === solution[2][1] && solution[2][0] === solution[2][2] && solution[2][0] !== 0) {
    k += 1
    b8 = 1
    if (solution[2][2] === 2) {
      forTwo = 1
    }
  }

  if (solution[0][0] === solution[1][0] && solution[0][0] === solution[2][0] && solution[0][0] !== 0) {
    k += 1
    b2 = 1
    if (solution[2][0] === 2) {
      forTwo = 1
    }
  }

  if (solution[0][1] === solution[1][1] && solution[0][1] === solution[2][1] && solution[0][1] !== 0) {
    k += 1
    b4 = 1
    if (solution[2][1] === 2) {
      forTwo = 1
    }
  }

  if (solution[0][2] === solution[1][2] && solution[0][2] === solution[2][2] && solution[0][2] !== 0) {
    k += 1
    b5 = 1
    if (solution[2][2] === 2) {
      forTwo = 1
    }
  }

  if (solution[0][0] === solution[1][1] && solution[0][0] === solution[2][2] && solution[0][0] !== 0) {
    k += 1
    b3 = 1
    if (solution[2][2] === 2) {
      forTwo = 1
    }
  }

  if (solution[2][0] === solution[1][1] && solution[2][0] === solution[0][2] && solution[2][0] !== 0) {
    k += 1
    b6 = 1
    if (solution[0][2] === 2) {
      forTwo = 1
    }
  }

  if (one - two < 0 || one - two > 1) {
    return 'NO';
  } else if (k > 2) {
    return 'NO';
  } else if (k === 1) {
    if (forTwo === 1 && one - two === 0) {
      return 'YES';
    } else if (forTwo === 1 && one - two > 0) {
      return 'NO';
    } else if (one - two === 0) {
      return 'NO';
    } else {
      return 'YES';
    }
  } else if (k === 0) {
    return 'YES';
  } else {
    if (b1 === 1 && (b1 === b2 || b1 === b4 || b1 === b5 || b1 === b3 || b1 === b6)) {
      return 'YES';
    } else if (b2 === 1 && (b2 === b7 || b2 === b8 || b2 === b3 || b2 === b6)) {
      return 'YES';
    } else if (b5 === 1 && (b5 === b7 || b5 === b8 || b5 === b3 || b5 === b6)) {
      return 'YES';
    } else if (b8 === 1) {
      if (b8 === b2 || b8 === b4 || b8 === b5 || b8 === b3 || b8 === b6) {
        return 'YES';
      } else {
        return 'NO';
      }
    } else if (b7 === 1 && (b7 === b4 || b7 === b3 || b7 === b6)) {
      return 'YES';
    } else if (b4 === 1 && (b4 === b3 || b4 === b6)) {
      return 'YES';
    } else if (b3 === 1 && b3 === b6) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
}
//
// const result = ticTacToe(game);
//
// fs.writeFileSync('output.txt', result)

console.log(ticTacToe(`1 1 1
1 1 1
1 1 1`)) // 1 NO
console.log(ticTacToe(`2 1 1
1 1 2
2 2 1`)) // 2 YES
console.log(ticTacToe(`1 1 1
2 0 2
0 0 0`)) // 3 YES
console.log(ticTacToe(`0 0 0
0 1 0
0 0 0`)) // 4 YES
console.log(ticTacToe(`0 1 2
1 2 1
2 1 0`)) // 21 NO
