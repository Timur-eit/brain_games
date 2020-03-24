import readlineSync from 'readline-sync';
import { getRandomNumber, isCorrect } from '../index.js';

const ruleForBrainGCD = 'Find the greatest common divisor of given numbers.\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

const collOfPaiersOfRandomNumbers = [
  [getRandomNumber(1, 50), getRandomNumber(1, 50)],
  [getRandomNumber(1, 50), getRandomNumber(1, 50)],
  [getRandomNumber(1, 50), getRandomNumber(1, 50)],
];

const getGCD = (x, y) => {
// Euclidean algorithm - method for computing the GCD
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const brainGCD = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainGCD);

  let result;
  // need to use "for...of" in this function instead of "Array.prototype.forEach()"
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfPaiersOfRandomNumbers) {
    // eslint-disable-next-line no-eval
    const GCD = getGCD(...item);
    const answer = parseInt((readlineSync.question(`Question: ${`${item[0]} ${item[1]}`}\nYour answer: `)), 10);

    let trueAnswer;

    if (isCorrect(answer, GCD)) {
      trueAnswer = answer;
    } else {
      trueAnswer = GCD;
    }

    if (answer === trueAnswer) {
      console.log('Correct!');
      result = true;
    } else if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${username}!`);
      result = false;
      break;
    }
  }
  if (result === true) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default brainGCD;
