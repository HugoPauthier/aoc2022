const fs = require('fs');

function main(rucksackList) {
  let res = 0;
  // We parse each rucksack to find each errors
  for (const rucksack of rucksackList) {
    const mistake = findError(rucksack);
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

function findError(rucksack) {
  const comp1 = rucksack.substring(0, rucksack.length / 2);
  const comp2 = rucksack.substring(rucksack.length / 2, rucksack.length);
  for (const item of comp1) {
    if (comp2.includes(item)) return item;
  }
}

const rucksackList = fs.readFileSync('./input.txt', 'utf8').split('\n');
console.log(main(rucksackList));
