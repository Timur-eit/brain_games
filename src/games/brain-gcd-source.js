import readlineSync from 'readline-sync';
import { getRandomNumber, brainGames } from '../index.js';

const ruleForBrainGCD = 'Find the greatest common divisor of given numbers.\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

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
  [`${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`],
  [`${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`],
  [`${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`],
];

const correctAnswerForBrainGCD = (num, expression) => {
  let trueAnswer;
  const formatedExpression = parseInt(expression, 10); // нужно преобразовать
  if (num === getGCD(expression)) {
    trueAnswer = num;
  } else {
    trueAnswer = getGCD(expression);
  }
  return trueAnswer;
};

const brainGCD = () => {
  brainGames(
    ruleForBrainGCD,
    collOfPaiersOfRandomNumbers,
    correctAnswerForBrainGCD,
    'number',
  );
};

export default brainGCD;

/**
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
 */
