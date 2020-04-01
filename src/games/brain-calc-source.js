// import readlineSync from 'readline-sync';
import { getRandomNumber, brainGamesUltimate } from '../index.js';

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

const isCorrect = (answer, expression) => {
  if (answer === expression) {
    return true;
  }
  return false;
};

const calculateExpression = (expression) => {
  // eslint-disable-next-line no-eval
  const valueOfExpression = eval(expression);
  return valueOfExpression;
};

const brainCalc = () => {
  brainGamesUltimate(ruleForBrainCalc, collOfRandomExpressions, isCorrect, calculateExpression);
};

export default brainCalc;
