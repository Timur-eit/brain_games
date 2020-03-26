import readlineSync from 'readline-sync';
import { getRandomNumber, isCorrect } from '../index.js';

const ruleForBrainCalc = 'What is the result of expression?\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

const collOfOperators = ['+', '-', '*'];
const getRandomItemOfArray = () => getRandomNumber(0, 3);
const getRandomOperator = () => collOfOperators[getRandomItemOfArray()];

const getRandomOfExpression = () => { // example return: 4 + 2
  const stringOfExpression = `${getRandomNumber(1, 10)} ${getRandomOperator()} ${getRandomNumber(1, 10)}`;
  return stringOfExpression;
};

const collOfRandomExpressions = [
  getRandomOfExpression(),
  getRandomOfExpression(),
  getRandomOfExpression(),
]; // 3 items of array => 3 questions to user

const brainCalc = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainCalc);

  let result;
  // need to use "for...of" in this function instead of "Array.prototype.forEach()"
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfRandomExpressions) {
    // eslint-disable-next-line no-eval
    const expression = eval(item); // initial expression returns from the coll as a 'string'
    const answer = parseInt((readlineSync.question(`Question: ${item}\nYour answer: `)), 10);

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

export default brainCalc;
