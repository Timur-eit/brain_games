import { brainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleForBrainGCD = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  // Euclidean algorithm
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const pointOfQuestionForBrainGCD = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secodNumber = getRandomNumber(1, 20);
  const stringOfNumbers = `${firstNumber} ${secodNumber}`;
  const answer = getGCD(firstNumber, secodNumber).toString();
  return [stringOfNumbers, answer];
};

const brainGCD = () => brainGames(ruleForBrainGCD, pointOfQuestionForBrainGCD);

export default brainGCD;
