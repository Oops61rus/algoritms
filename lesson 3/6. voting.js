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