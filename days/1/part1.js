const fs = require('fs');

function getRichestElf(input) {
    const sumedCalories = input.map(e => e.reduce((accumulator, current) => accumulator + current, 0));
    return Math.max(...sumedCalories);
}

const elfListString = fs.readFileSync('./input.txt', 'utf8').split('\n\n').map(e => e.split('\n'));
const elfListInt = elfListString.map(e => e.map(c => parseInt(c)));

console.log(getRichestElf(elfListInt));