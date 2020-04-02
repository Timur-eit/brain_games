import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const ruleForBrainGCD = 'Find the greatest common divisor of given numbers.\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

const isCorrect = (answer, expression) => {
  if (answer === expression) {
    return true;
  }
  return false;
};

const getGCD = (x, y) => { // Euclidean algorithm - method for computing the GCD
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const collOfPaiersOfRandomNumbers = [
  [getRandomNumber(1, 50), getRandomNumber(1, 50)],
  [getRandomNumber(1, 50), getRandomNumber(1, 50)],
  [getRandomNumber(1, 50), getRandomNumber(1, 50)],
];

const firstPair = getGCD(...collOfPaiersOfRandomNumbers[0]);
const secondPair = getGCD(...collOfPaiersOfRandomNumbers[1]);
const thirdPair = getGCD(...collOfPaiersOfRandomNumbers[2]);

const collOfGcdPair = [firstPair, secondPair, thirdPair];


const brainGCD = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainGCD);

  let result;

  for (let i = 0; i < collOfGcdPair.length; i += 1) {
    const item = collOfGcdPair[i];

    const answer = parseInt((readlineSync.question(`Question: ${`${item[0]} ${item[1]}`}\nYour answer: `)), 10);
    const expression = item;


    let trueAnswer;

    if (isCorrect(answer, expression)) {
      trueAnswer = answer;
    } else {
      trueAnswer = expression;
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
