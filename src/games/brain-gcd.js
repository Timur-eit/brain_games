import brainGames from '../index.js';
import { getRandomNumber } from '../utils.js';

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

const getPairOfNumbersAndGcd = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secodNumber = getRandomNumber(1, 20);
  const pairOfNumbersForUser = `${firstNumber} ${secodNumber}`;
  const answer = getGCD(firstNumber, secodNumber).toString();
  return [pairOfNumbersForUser, answer];
};

const runBrainGcd = () => brainGames(ruleForBrainGCD, getPairOfNumbersAndGcd);

export default runBrainGcd;
