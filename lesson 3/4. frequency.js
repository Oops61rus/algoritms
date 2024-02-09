// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const text = fileContent.toString();

function frequency(text) {
  const words = text.replaceAll('\n', ' ').trim();

  if(!words) {
    return '';
  }

  const array = words.split(' ');

  const map = array.reduce((acc, currentValue) => {
    if(!acc[currentValue]) {
      acc[currentValue] = 1;
    } else {
      acc[currentValue]++;
    }

    return acc;
  }, {});

  return Object.entries(map).sort((x, y) => {
    if(y[1] === x[1]) {
      if(y[0] > x[0]) {
        return -1;
      } else if(y[0] < x[0]) {
        return 1;
      } else {
        return 0;
      }
    }

    return y[1] - x[1]
  }).map(([text]) => text).join('\n');
}

// const result = frequency(text);
//
// fs.writeFileSync('output.txt', result);

console.log(frequency(`hi
hi
what is your name
my name is bond
james bond
my name is damme
van damme
claude van damme
jean claude van damme
`));

// frequency(`hi
// hi
// what is your name
// my name is bond
// james bond
// my name is damme
// van damme
// claude van damme
// jean claude van damme
// `);