// В школе решили на один прямоугольный стол поставить два прямоугольных ноутбука. Ноутбуки нужно поставить так, чтобы их стороны были параллельны сторонам стола. Определите, какие размеры должен иметь стол, чтобы оба ноутбука на него поместились, и площадь стола была минимальна.
//
// Формат ввода
// Вводится четыре натуральных числа, первые два задают размеры одного ноутбука, а следующие два — размеры второго. Числа не превышают 1000.
//
// Формат вывода
// Выведите два числа — размеры стола. Если возможно несколько ответов, выведите любой из них (но только один).
//
// Пример 1
// Ввод Вывод
// 10 2 2 10
// 20 2
// 2 20
// 4 10
// 10 4
// Пример 2
// Ввод Вывод
// 5 7 3 2
// 9 5
// 5 9
// Примечания
// В примерах указаны всевозможные ответы на поставленную задачу. Ваша программа должна вывести один из них.


function notebooksPositions(sizes) {
  if(!sizes) return;

  const [oneX, oneY, twoX, twoY] = sizes.split(' ').map(Number);
  const tableSize = [];

  tableSize.push(Math.max(oneX, twoX) * (oneY + twoY))
  tableSize.push(Math.max(oneX, twoY) * (oneY + twoX))
  tableSize.push(Math.max(oneY, twoX) * (oneX + twoY))
  tableSize.push(Math.max(oneY, twoY) * (oneX + twoX))

  const minSizes = Math.min(...tableSize);

  if(minSizes === tableSize[0]) {
    return `${Math.max(oneX, twoX)} ${oneY + twoY}`
  } else if(minSizes === tableSize[1]) {
    return `${Math.max(oneX, twoY)} ${oneY + twoX}`
  } else if(minSizes === tableSize[2]) {
    return `${Math.max(oneY, twoX)} ${oneX + twoY}`
  } else {
    return `${Math.max(oneY, twoY)} ${oneX + twoX}`
  }
}