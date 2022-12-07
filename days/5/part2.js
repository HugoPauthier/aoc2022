const fs = require('fs');
var _ = require('lodash');

function main(stacks, procedure) {
  for (const [nb, from, to] of procedure) {
    const movingCrates = _.take(stacks[from - 1], nb);
    for (let i = movingCrates.length - 1; i > -1; i--) {
      const movingCrate = movingCrates[i];
      stacks[to - 1].unshift(movingCrate);
    }
    stacks[from - 1] = stacks[from - 1].slice(nb);
  }
  return stacks;
}

function initStacks(input) {
  res = [];
  const drawing = input[0].split('\n');
  const length = drawing.pop().length;
  for (let i = 1; i < length; i += 4) {
    const newStack = [];
    for (const line of drawing) {
      newStack.push(line[i]);
    }
    res.push(newStack);
  }
  res.map((stack) => _.remove(stack, (crate) => crate === ' '));
  return res;
}

function getResult(stacks) {
  let res = '';
  stacks.map((stack) => (res += _.first(stack)));
  return res;
}

function initProcedure(input) {
  const procedure = input[1].split('\n').map((m) => m.split(' '));
  procedure.map((line) => _.pullAt(line, [0, 2, 4]));
  return procedure;
}

const input = fs.readFileSync('./input.txt', 'utf8').split('\n\n');
const stacks = initStacks(input);
const procedure = initProcedure(input);
const rearrange = main(stacks, procedure);
console.log(getResult(rearrange));
