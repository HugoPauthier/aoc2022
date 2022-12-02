const fs = require('fs');

const shapes = {
    'A': 'rock',
    'X': 'rock',
    'B': 'paper',
    'Y': 'paper',
    'C': 'scissors',
    'Z': 'scissors'
}

const winningRules = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}

const shapePoints = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
}

function calculateScore(strategyGuide) {
    let score = 0;
    const mappedStrategy = strategyGuide.map(round => round.map(shape => shapes[shape]));
    for (const [opponent, me] of mappedStrategy) {
        if (opponent === me) score += shapePoints[me] + 3;
        else {
            if (winningRules[me] === opponent) score += shapePoints[me] + 6;
            else {
                score += shapePoints[me];
            }
        }
    }
    return score;
}

const strategyGuide = fs.readFileSync('./input.txt', 'utf8').split('\n').map(e => e.split(' '));
console.log(calculateScore(strategyGuide));
