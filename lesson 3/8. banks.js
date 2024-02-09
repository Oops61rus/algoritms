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