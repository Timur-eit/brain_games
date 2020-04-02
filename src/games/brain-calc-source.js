// import readlineSync from 'readline-sync';
import { getRandomNumber, brainGames } from '../index.js';

const ruleForBrainCalc = 'What is the result of expression?\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

const collOfOperators = ['+', '-', '*'];
const getRandomItemOfArray = () => getRandomNumber(0, 3);
const getRandomOperator = () => collOfOperators[getRandomItemOfArray()];

const getRandomOfExpression = () => { // for example: '4 + 2'
  const stringOfExpression = `${getRandomNumber(1, 10)} ${getRandomOperator()} ${getRandomNumber(1, 10)}`;
  return stringOfExpression;
};

const collOfRandomExpressions = [
  getRandomOfExpression(),
  getRandomOfExpression(),
  getRandomOfExpression(),
];

// eslint-disable-next-line no-eval
const calculateExpression = (expression) => eval(expression);

const correctAnswerForBrainCalc = (num, expression) => {
  let trueAnswer;
  if (num === calculateExpression(expression)) {
    trueAnswer = num;
  } else {
    trueAnswer = calculateExpression(expression);
  }
  return trueAnswer;
};

const brainCalc = () => {
  brainGames(
    ruleForBrainCalc,
    collOfRandomExpressions,
    correctAnswerForBrainCalc,
    'number',
  );
};

export default brainCalc;