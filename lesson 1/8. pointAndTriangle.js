// На координатной плоскости расположены равнобедренный прямоугольный треугольник ABC с длиной катета d и точка X. Катеты треугольника лежат на осях координат, а вершины расположены в точках: A (0,0), B (d,0), C (0,d).
// Напишите программу, которая определяет взаимное расположение точки X и треугольника. Если точка X расположена внутри или на сторонах треугольника, выведите 0. Если же точка находится вне треугольника, выведите номер ближайшей к ней вершины.
//
// Формат ввода
// Сначала вводится натуральное число d (не превосходящее 1000), а затем координаты точки X – два целых числа из диапазона от ­–1000 до 1000.
//
// Формат вывода
// Если точка лежит внутри, на стороне треугольника или совпадает с одной из вершин, то выведите число 0. Если точка лежит вне треугольника, то выведите номер вершины треугольника, к которой она расположена ближе всего (1 – к вершине A, 2 – к B, 3 – к C). Если точка расположена на одинаковом расстоянии от двух вершин, выведите ту вершину, номер которой меньше.
//
// Пример 1
// Ввод	Вывод
// 5
// 1 1
// 0
//
// Пример 2
// Ввод	Вывод
// 3
// -1 -1
// 1
//
// Пример 3
// Ввод	Вывод
// 4
// 4 4
// 2
//
// Пример 4
// Ввод
// 4
// 2 2
// Вывод
// 0
//
// Примечания
// Комментарии к примерам тестов
// 1. Точка лежит внутри треугольника.
// 2. Точка лежит вне треугольника и ближе всего к ней вершина A
// 3. Точка лежит на равном расстоянии от вершин B и C,в этом случае нужно вывести ту вершину, у которой номер меньше, т.е. выведено должно быть число 2
// 4. Точка лежит на стороне треугольника.

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [d, coords] = fileContent.split('\n');

function pointAndTriangle(d, coords) {
  const [x, y] = coords.split(' ').map(Number);

  const dA = Math.sqrt((x ** 2) + (y ** 2));
  const dB = Math.sqrt(((x - d) ** 2) + (y ** 2));
  const dC = Math.sqrt((x ** 2) + ((y - d) ** 2));

  if(x >= 0 && y >= 0 && x + y <= d) {
    return 0;
  }

  const min = Math.min(dA, dB, dC);

  if(min === dA) {
    return 1;
  } else if (min === dB) {
    return 2;
  } else if(min === dC) {
    return 3;
  }
}

const result = pointAndTriangle(d, coords);

fs.writeFileSync('output.txt', result.toString())

console.log(pointAndTriangle('5', '1 1')); // 0
console.log(pointAndTriangle('3', '-1 -1')); // 1
console.log(pointAndTriangle('4', '4 4')); // 2
console.log(pointAndTriangle('4', '2 2')); // 0
