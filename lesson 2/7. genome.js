// `G. Инопланетный геном
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Геном жителей системы Тау Кита содержит 26 видов оснований, для обозначения которых будем использовать буквы латинского алфавита от A до Z, а сам геном записывается строкой из латинских букв. Важную роль в геноме играют пары соседних оснований, например, в геноме «ABBACAB» можно выделить следующие пары оснований: AB, BB, BA, AC, CA, AB.
//
// Степенью близости одного генома другому геному называется количество пар соседних оснований первого генома, которые встречаются во втором геноме.
//
// Формат ввода
// Вам даны два генома, определите степень близости первого генома второму геному. Программа получает на вход две строки, состоящие из заглавных латинских букв. Каждая строка непустая, и её длина не превосходит 105.
//
// Формат вывода
// Программа должна вывести одно целое число – степень близости генома, записанного в первой строке, геному, записанному во второй строке.`


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const [genomeA, genomeB] = fileContent.toString().split('\n');

function genome(genomeA, genomeB) {
  let pairs = 0;

  for (let i = 1; i < genomeA.length; i++) {
    const pair = genomeA[i - 1] + genomeA[i];

    if(genomeB.includes(pair)) {
      pairs++;
    }
  }

  return pairs;
}

// const result = genome(genomeA, genomeB);
// fs.writeFileSync('output.txt', result.toString())


console.log(genome('ABBACAB', 'BCABB'));
console.log(genome('COSGPLOWDYWVODEELOFHAYAUZPJBQLXCLXBTQLYCXBHLIDNPAVBEAHCVOAZCN','LEOQXASTXXECCFZVXOJKZPGGCMSQVBITNAQBWKHGFGRXRCIXJBHPVQLDOXFDTMWDEYTSZQNTJHXWMFBRNC'))
