// `H. Провода
// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Дано N отрезков провода длиной L1, L2, ..., LN сантиметров. Требуется с помощью разрезания получить из них K равных отрезков как можно большей длины, выражающейся целым числом сантиметров. Если нельзя получить K отрезков длиной даже 1 см, вывести 0.
//
// Формат ввода
// В первой строке находятся числа N и К. В следующих N строках - L1, L2, ..., LN, по одному числу в строке.
//
// Ограничения: 1 ≤ N, K ≤ 10 000, 100 ≤ Li ≤ 10 000 000, все числа целые.
//
// Формат вывода
// Вывести одно число - полученную длину отрезков.`


const input = `4 11
802
743
457
539
`

// const input = `7 13
// 3318
// 5775
// 7318
// 336
// 9490
// 5712
// 2379`

const [counts, ...cablesArray] = input.trim().split('\n');
const [n, k] = counts.trim().split(' ').map(Number)

// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
// const [counts, ...cablesArray] = fileContent.toString().trim().split('\n');
// const [n, k] = counts.trim().split(' ').map(Number)

function cables(cablesArray) {
  const arr = cablesArray.map(cable => Number(cable.trim()))

  for (let i = 0; i < n; i++) {
    let left = 0
    let right = arr[i]

    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      let an = 0

      for (let j = 0; j < n; j++) {
        an += arr[i] / mid

        if (an >= k) {
          left = mid + 1
        } else {
          right = mid
        }
      }
    }

    return left - 1
  }
}

// function cut(arr, max, length) {
//   let sum = 0
//
//   for (let i = 0; i < n; i++) {
//     sum = sum + arr[i] / length;
//
//     if(sum > max) {
//       return sum
//     }
//   }
// }
//
// function cables(cablesArray) {
//   const arr = cablesArray.map(cable => Number(cable.trim()))
//
//   let min = 0;
//   let max = Math.max(...arr);
//
//   while (max > min + 1) {
//     let mid = Math.floor((min + max) / 2)
//
//     if(cut(arr, max, mid) > k) {
//       min = mid
//     } else {
//       max = mid
//     }
//   }
//
//   return min
// }

// const result = cables(counts, cablesArray);
// fs.writeFileSync('output.txt', result.toString());


// #include<iostream>
// using namespace std;
// int main()
// {
//   int n,k;
//   cin>>n>>k;
//   int A[n];
//   for (int i=0;i<n;++i)
//   cin>>A[i];
//   int l=1,r=1e9;
//   while (l<r)
//   {
//     int m=(l+r)/2;
//     int an=0;
//     for (int i=0;i<n;++i)
//     an+=A[i]/m;
//     if (an>=k)
//       l=m+1;
//     else
//       r=m;
//   }
//   cout<<l-1;
// }


console.log(cables(cablesArray));