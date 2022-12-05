const fs = require('fs');

function main(rucksackList) {
  let res = 0;
  // We parse each group's rucksack to find each errors
  for (let i = 0; i < rucksackList.length; i += 3) {
    const r1 = rucksackList[i];
    const r2 = rucksackList[i + 1];
    const r3 = rucksackList[i + 2];

    const mistake = findError([r1, r2, r3]);
    const mistakeCode = mistake.charCodeAt(0);
    let priority;
    if (mistakeCode > 64 && mistakeCode < 91) {
      // Uppercase
      priority = mistakeCode - 38;
    } else if (mistakeCode > 96 && mistakeCode < 123) {
      // Lowercase
      priority = mistakeCode - 96;
    }
    res += priority;
  }
  return res;
}

function findError([r1, r2, r3]) {
  for (const item of r1) {
    if (r2.includes(item) && r3.includes(item)) return item;
  }
}

const rucksackList = fs.readFileSync('./input.txt', 'utf8').split('\n');
console.log(main(rucksackList));
