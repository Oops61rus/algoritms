// `D. Кубики
// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Аня и Боря любят играть в разноцветные кубики, причем у каждого из них свой набор и в каждом наборе все кубики различны по цвету. Однажды дети заинтересовались, сколько существуют цветов таких, что кубики каждого цвета присутствуют в обоих наборах. Для этого они занумеровали все цвета случайными числами. На этом их энтузиазм иссяк, поэтому вам предлагается помочь им в оставшейся части. Номер любого цвета — это целое число в пределах от 0 до 109.
//
// Формат ввода
// В первой строке входного файла записаны числа N и M — количество кубиков у Ани и Бори соответственно. В следующих N строках заданы номера цветов кубиков Ани. В последних M строках номера цветов кубиков Бори.
//
// Формат вывода
// Выведите сначала количество, а затем отсортированные по возрастанию номера цветов таких, что кубики каждого цвета есть в обоих наборах, затем количество и отсортированные по возрастанию номера остальных цветов у Ани, потом количество и отсортированные по возрастанию номера остальных цветов у Бори.`


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