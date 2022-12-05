const fs = require('fs');

function getRichestElves(input) {
  const sumedCalories = input.map((e) =>
    e.reduce((accumulator, current) => accumulator + current, 0)
  );
  const sortedElves = sumedCalories.sort((a, b) => b - a);
  return sortedElves[0] + sortedElves[1] + sortedElves[2];
}

const elfListString = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n\n')
  .map((e) => e.split('\n'));
const elfListInt = elfListString.map((e) => e.map((c) => parseInt(c)));

console.log(getRichestElves(elfListInt));
