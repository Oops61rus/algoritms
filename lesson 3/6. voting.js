// `F. Выборы в США
// Ограничение времени\t2 секунды
// Ограничение памяти\t64Mb
// Ввод\tстандартный ввод или input.txt
// Вывод\tстандартный вывод или output.txt
// Как известно, в США президент выбирается не прямым голосованием, а путем двухуровневого голосования. Сначала проводятся выборы в каждом штате и определяется победитель выборов в данном штате. Затем проводятся государственные выборы: на этих выборах каждый штат имеет определенное число голосов — число выборщиков от этого штата. На практике, все выборщики от штата голосуют в соответствии с результами голосования внутри штата, то есть на заключительной стадии выборов в голосовании участвуют штаты, имеющие различное число голосов. Вам известно за кого проголосовал каждый штат и сколько голосов было отдано данным штатом. Подведите итоги выборов: для каждого из участника голосования определите число отданных за него голосов.
//
// Формат ввода
// Каждая строка входного файла содержит фамилию кандидата, за которого отдают голоса выборщики этого штата, затем через пробел идет количество выборщиков, отдавших голоса за этого кандидата.
//
// Формат вывода
// Выведите фамилии всех кандидатов в лексикографическом порядке, затем, через пробел, количество отданных за них голосов.`


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const candidates = fileContent.toString().trim();

function voting(candidates) {
  const array = candidates.trim().split('\n');

  if(array.length === 0) {
      return '';
  }

  const mapVoting = array.reduce((acc, currentValue) => {
    const [name, count] = currentValue.split(' ');

    if(acc[name]) {
      acc[name] = acc[name] + Number(count);
    } else {
      acc[name] = Number(count);
    }

    return acc;
  }, {});

  return Object.entries(mapVoting).sort((x, y) => {
    if(x[0] < y[0]) {
      return -1;
    } else if(x[0] > y[0]) {
      return 1;
    } else {
      return 0;
    }
  }).map(el => el.join(' ')).join('\n');
}

const result = voting(candidates);

fs.writeFileSync('output.txt', result);

console.log(voting(`McCain 10
McCain 5
Obama 9
Obama 8
McCain 1
`));

console.log(voting(`ivanov 100
ivanov 500
ivanov 300
petr 70
tourist 1
tourist 2
`));

console.log(voting(`bur 1
`));