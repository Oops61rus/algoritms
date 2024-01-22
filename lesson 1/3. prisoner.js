// За многие годы заточения узник замка Иф проделал в стене прямоугольное отверстие размером D×E. Замок Иф сложен из кирпичей, размером A×B×C. Определите, сможет ли узник выбрасывать кирпичи в море через это отверстие, если стороны кирпича должны быть параллельны сторонам отверстия.
//
// Формат ввода
// Программа получает на вход числа A,B,C,D,E.
//
// Формат вывода
// Программа должна вывести слово YES или NO.
//
// Пример 1
// Ввод
// 1
// 1
// 1
// 1
// 1
//
// Вывод
// YES
//
// Пример 2
// Ввод
// 2
// 2
// 2
// 1
// 1
//
// Вывод
// NO

function prisoner(a, b, c, d, e) {
  const [A, B, C, D, E] = [Number(a), Number(b), Number(c), Number(d), Number(e)];
  // const brickSortedSize = [a, b, c].map(Number).sort((x, y) => x - y);
  // const holeSortedSize = [d, e].map(Number).sort((x, y) => x - y);
  //
  // return holeSortedSize.every((size, index) => size >= brickSortedSize[index]) ? 'YES' : 'NO';


  if ((A <= D && B <= E) || (A <= E && B <= D)) {
    return 'YES';
  } else if ((C <= D && B <= E) || (C <= E && B <= D)) {
    return 'YES';
  } else if ((A <= D && C <= E) || (A <= E && C <= D)) {
    return 'YES';
  } else {
    return 'NO';
  }
}

prisoner(1, 1, 1, 1, 1); // YES
prisoner(2, 2, 2, 1, 1); // NO
prisoner(1, 1, 1, 2, 2); // YES
prisoner(1, 1, 1, 2, 1); // YES
prisoner(2, 1, 1, 1, 1); // YES
prisoner(2, 2, 1, 1, 1); // NO
prisoner(2, 2, 1, 2, 1); // YES
prisoner(1, 2, 1, 1, 1); // YES
prisoner(1, 1, 2, 1, 1); // YES
prisoner(2, 1, 15, 2, 1); // YES
prisoner(1500, 1, 1500, 1500, 1); // YES
prisoner('562', '2775', '5599', '88', '4692'); // NO
