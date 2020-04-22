import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (!y) {
    return x;
  }
  return getGcd(y, x % y);
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secodNumber = getRandomNumber(1, 20);
  const question = `${firstNumber} ${secodNumber}`;
  const answer = getGcd(firstNumber, secodNumber).toString();
  return [question, answer];
};

const runGcd = () => gameEngine(description, getRound);

export default runGcd;
