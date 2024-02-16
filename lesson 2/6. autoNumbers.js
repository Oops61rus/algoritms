// `F. Автомобильные номера
// Ограничение времени\t2 секунды
// Ограничение памяти\t64Mb
// Ввод\tстандартный ввод или input.txt
// Вывод\tстандартный вывод или output.txt
// Неизвестный водитель совершил ДТП и скрылся с места происшествия. Полиция опрашивает свидетелей. Каждый из них говорит, что запомнил какие-то буквы и цифры номера. Но при этом свидетели не помнят порядок этих цифр и букв. Полиция хочет проверить несколько подозреваемых автомобилей. Будем говорить, что номер согласуется с показанием свидетеля, если все символы, которые назвал свидетель, присутствуют в этом номере (не важно, сколько раз).
//
// Формат ввода
// Сначала задано число  - количество свидетелей. Далее идет M строк, каждая из которых описывает показания очередного свидетеля. Эти строки непустые и состоят из не более чем 20 символов. Каждый символ в строке - либо цифра, либо заглавная латинская буква, причём символы могут повторяться.
// Затем идёт число  - количество номеров. Следующие строки представляют из себя номера подозреваемых машин и имеют такой же формат, как и показания свидетелей.
//
// Формат вывода
// Выпишите номера автомобилей, согласующиеся с максимальным количеством свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в котором они были заданы на входе.`


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const numbers = fileContent.toString().split('\n');

function autoNumbers(numbers) {
  const [countWitnesses, ...rest] = numbers;
  const witnesses = rest.slice(0, countWitnesses);
  const [countSuspects, ...suspects] = rest.slice(countWitnesses);
  let maxMatchCount = 0;

  const mapSuspects = suspects.reduce((acc, current) => {
    acc[current] = 0;

    witnesses.forEach(wNum => {
      const splitWNum = wNum.split('');

      if(splitWNum.every(char => current.includes(char))) {
        const count = acc[current] + 1;

        acc[current] = count;

        if(count > maxMatchCount) {
          maxMatchCount = count;
        }
      }
    })

    return acc;
  }, {});

  const resultKeys = Object.keys(mapSuspects).filter(key => mapSuspects[key] === maxMatchCount);

  return suspects.filter(num => resultKeys.includes(num)).join('\n');
}

// const result = autoNumbers(numbers);
// fs.writeFileSync('output.txt', result);

// autoNumbers(`3
// ABC
// A37
// BCDA
// 2
// A317BD
// B137AC`.split('\n'))
//
// autoNumbers(`2
// 1ABC
// 3A4B
// 3
// A143BC
// C143AB
// AAABC1`.split('\n'))

console.log(autoNumbers(`1
AAAAAAAAAAAA
13
AAAAAAAAAAAAAB
BASD234234
ASDBSBF
BBBBBDS
SDASDSD
AAAAAA
BBBBBDS
ASDBSBF
AAAAAA
BABA
AB
A
AAAAAAAAAAAAAAAAAAAA`.split('\n')));;



// AAAAAAAAAAAAAB
// BASD234234
// ASDBSBF
// SDASDSD
// AAAAAA
// ASDBSBF
// AAAAAA
// BABA
// AB
// A
// AAAAAAAAAAAAAAAAAAAA
