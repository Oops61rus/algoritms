// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const [array1, array2] = fileContent.toString().split('\n');

const a = `1 2 6 4 5 7
10 2 3 4 8`;

const [a1, a2] = a.toString().split('\n');

function intersections(arr1, arr2) {
  const set = new Set(arr1.split(' '));

  const split = arr2.split(' ');
  const filter = split.filter(el => set.has(el));
  const sort = filter.sort((x, y) => x - y);
  const join = sort.join(' ');

  console.log('split', split, 'filter', filter, 'sort', sort, 'join', join);

  return join;

  // return arr2
  //   .split(' ')
  //   .filter(el => set.has(el))
  //   .sort((x, y) => x - y)
  //   .join(' ');
}

// const result = intersections(arr1, arr2);
//
// fs.writeFileSync('output.txt', result)

console.log(intersections(a1, a2));