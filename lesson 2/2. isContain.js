// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const numbers = fileContent.toString().split(' ').map(Number);

function isContain(numbers) {
  const set = new Set();

  return numbers.map(value => {
    if(set.has(value)) {
      return 'YES\n'
    } else {
      set.add(value);
      return 'NO\n';
    }
  }).join('');
}

// const result = isContain(numbers);
//
// fs.writeFileSync('output.txt', result.join('\n'))

// console.log(isContain('1 2 3 4 4 4'))
console.log(isContain('1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'.split(' ').map(Number)))
// console.log(isContain())