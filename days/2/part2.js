const fs = require('fs');

const shapes = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'lose',
  Y: 'draw',
  Z: 'win',
};

const winningRules = {
  rock: 'paper',
  paper: 'scissors',
  scissors: 'rock',
};

const losingRules = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

const shapePoints = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

function calculateScore(strategyGuide) {
  let score = 0;
  const mappedStrategy = strategyGuide.map((round) =>
    round.map((shape) => shapes[shape])
  );
  for (const [opponent, me] of mappedStrategy) {
    switch (me) {
      case 'lose':
        score += shapePoints[losingRules[opponent]];
        break;
      case 'draw':
        score += shapePoints[opponent] + 3;
        break;
      case 'win':
        score += shapePoints[winningRules[opponent]] + 6;
    }
  }
  return score;
}

const strategyGuide = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .map((e) => e.split(' '));
console.log(calculateScore(strategyGuide));
