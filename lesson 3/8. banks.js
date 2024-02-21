// `H. Банковские счета
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Некоторый банк хочет внедрить систему управления счетами клиентов, поддерживающую следующие операции:
//
// Пополнение счета клиента.
//
// Снятие денег со счета.
//
// Запрос остатка средств на счете.
//
// Перевод денег между счетами клиентов.
//
// Начисление процентов всем клиентам.
//
// Вам необходимо реализовать такую систему. Клиенты банка идентифицируются именами (уникальная строка, не содержащая пробелов). Первоначально у банка нет ни одного клиента. Как только для клиента проводится операция пололнения, снятия или перевода денег, ему заводится счет с нулевым балансом. Все дальнейшие операции проводятся только с этим счетом. Сумма на счету может быть как положительной, так и отрицательной, при этом всегда является целым числом.
//
// Формат ввода
// Входной файл содержит последовательность операций. Возможны следующие операции: DEPOSIT name sum - зачислить сумму sum на счет клиента name. Если у клиента нет счета, то счет создается. WITHDRAW name sum - снять сумму sum со счета клиента name. Если у клиента нет счета, то счет создается. BALANCE name - узнать остаток средств на счету клиента name. TRANSFER name1 name2 sum - перевести сумму sum со счета клиента name1 на счет клиента name2. Если у какого-либо клиента нет счета, то ему создается счет. INCOME p - начислить всем клиентам, у которых открыты счета, p% от суммы счета. Проценты начисляются только клиентам с положительным остатком на счету, если у клиента остаток отрицательный, то его счет не меняется. После начисления процентов сумма на счету остается целой, то есть начисляется только целое число денежных единиц. Дробная часть начисленных процентов отбрасывается.
//
// Формат вывода
// Для каждого запроса BALANCE программа должна вывести остаток на счету данного клиента. Если же у клиента с запрашиваемым именем не открыт счет в банке, выведите ERROR.`


// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const list = fileContent.toString().trim();

const clients = {};

function deposit([name, sum]) {
  if(clients[name] === undefined) {
    clients[name] = Number(sum);
  } else {
    clients[name] = clients[name] + Number(sum);
  }
}

function withdraw([name, sum]) {
  if(clients[name] === undefined) {
    clients[name] = -Number(sum);
  } else {
    clients[name] = clients[name] - Number(sum);
  }
}

function balance([name]) {
  if(clients[name] === undefined) {
    return 'ERROR';
  }

  return clients[name];
}

function transfer([nameFrom, nameTo, sum]) {
  if(clients[nameFrom] === undefined) {
    clients[nameFrom] = 0;
  }

  if(clients[nameTo] === undefined) {
    clients[nameTo] = 0;
  }

  clients[nameFrom] = clients[nameFrom] - Number(sum);
  clients[nameTo] = clients[nameTo] + Number(sum);
}

function income([percent]) {
  for (const clientName in clients) {
    if(clients[clientName] > 0) {
      const p = Math.floor(clients[clientName] / 100 * percent);

      clients[clientName] = clients[clientName] + p;
    }
  }
}

function banksOperations(list) {
  const operationsArray = list.trim().split('\n');

  if(operationsArray.length === 0) {
    return '';
  }

  const result = [];

  operationsArray.forEach((action) => {
    const [operation, ...rest] = action.split(' ');

    switch (operation) {
      case 'DEPOSIT':
        deposit(rest);
        break;
      case 'WITHDRAW':
        withdraw(rest);
        break;
      case 'BALANCE':
        result.push(balance(rest));
        break;
      case 'TRANSFER':
        transfer(rest);
        break;
      case 'INCOME':
        income(rest);
        break;
      default:
        break;
    }
  })

  return result.join('\n');
}
//
// const result = banksOperations(list);
//
// fs.writeFileSync('output.txt', result);

// console.log(banksOperations(`DEPOSIT Ivanov 100
// INCOME 5
// BALANCE Ivanov
// TRANSFER Ivanov Petrov 50
// WITHDRAW Petrov 100
// BALANCE Petrov
// BALANCE Sidorov
// `));

// console.log(banksOperations(`BALANCE Ivanov
// BALANCE Petrov
// DEPOSIT Ivanov 100
// BALANCE Ivanov
// BALANCE Petrov
// DEPOSIT Petrov 150
// BALANCE Petrov
// DEPOSIT Ivanov 10
// DEPOSIT Petrov 15
// BALANCE Ivanov
// BALANCE Petrov
// DEPOSIT Ivanov 46
// BALANCE Ivanov
// BALANCE Petrov
// DEPOSIT Petrov 14
// BALANCE Ivanov
// BALANCE Petrov
// `));

console.log(banksOperations(`BALANCE a
BALANCE b
DEPOSIT a 100
BALANCE a
BALANCE b
WITHDRAW a 20
BALANCE a
BALANCE b
WITHDRAW b 78
BALANCE a
BALANCE b
WITHDRAW a 784
BALANCE a
BALANCE b
DEPOSIT b 849
BALANCE a
BALANCE b
`))

console.log(clients)