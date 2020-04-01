import { getRandomNumber, brainGames } from '../index.js';

export const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const collOfExpressions = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
];

export const brainEven = () => brainGames(ruleForBrainEven, collOfExpressions, isEven);
