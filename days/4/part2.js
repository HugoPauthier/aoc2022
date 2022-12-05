const fs = require('fs');
var _ = require('lodash');

function main(sectionList) {
  let res = 0;
  for (const [elf1, elf2] of sectionList) {
    const range1 = _.range(elf1[0], elf1[1] + 1);
    const range2 = _.range(elf2[0], elf2[1] + 1);
    if (_.intersection(range1, range2).length > 0) {
      res++;
    }
  }
  return res;
}

const sectionList = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .map((pairs) =>
    pairs.split(',').map((section) => section.split('-').map(Number))
  );

console.log(main(sectionList));
