import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

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

const getRound = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secodNumber = getRandomNumber(1, 20);
  const question = `${firstNumber} ${secodNumber}`;
  const answer = getGCD(firstNumber, secodNumber).toString();
  return [question, answer];
};

const runGcd = () => brainGames(description, getRound);

export default runGcd;
