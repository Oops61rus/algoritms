// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const [genomeA, genomeB] = fileContent.toString().split('\n');

function genome(genomeA, genomeB) {
  let pairs = 0;

  for (let i = 1; i < genomeA.length; i++) {
    const pair = genomeA[i - 1] + genomeA[i];

    if(genomeB.includes(pair)) {
      pairs++;
    }
  }

  return pairs;
}

// const result = genome(genomeA, genomeB);
// fs.writeFileSync('output.txt', result.toString())


console.log(genome('ABBACAB', 'BCABB'));
console.log(genome('COSGPLOWDYWVODEELOFHAYAUZPJBQLXCLXBTQLYCXBHLIDNPAVBEAHCVOAZCN','LEOQXASTXXECCFZVXOJKZPGGCMSQVBITNAQBWKHGFGRXRCIXJBHPVQLDOXFDTMWDEYTSZQNTJHXWMFBRNC'))
