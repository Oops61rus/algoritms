// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const cubes = fileContent.toString().trim().split('\n');

function countCubes(cubes) {
  const [counts, ...colors] = cubes;
  const [countA, countB] = counts.split(' ').map(Number);
  const colorsA = colors.slice(0, countA).map(Number).sort((x, y) => x - y);
  const colorsB = colors.slice(-countB).map(Number).sort((x, y) => x - y);

  const intersectionColors = colorsA.filter(color => colorsB.includes(color));
  const restColorsA = colorsA.filter(color => !intersectionColors.includes(color));
  const restColorsB = colorsB.filter(color => !intersectionColors.includes(color));

  return [
    intersectionColors.length,
    intersectionColors.join(' '),
    restColorsA.length,
    restColorsA.join(' '),
    restColorsB.length,
    restColorsB.join(' ')
  ].join('\n');
}

console.log(countCubes(`4 3
0
1
10
9
1
3
0`.split('\n')));
console.log(countCubes(`2 2
1
2
2
3`.split('\n')))
console.log(countCubes('0 0'.split('\n')))

// const result = countCubes(cubes);
//
// fs.writeFileSync('output.txt', result.toString())