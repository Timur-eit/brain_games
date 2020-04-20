import brainGames from '../index.js';
import { getRandomNumber } from '../utils.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getEvenNumberAndAnswer = () => {
  const numberForUser = getRandomNumber(1, 100);
  const answer = isEven(numberForUser) ? 'yes' : 'no';
  return [numberForUser, answer];
};

const runBrainEven = () => brainGames(ruleForBrainEven, getEvenNumberAndAnswer);

export default runBrainEven;
