import { getRandomNumber, brainGames } from '../index.js';

const ruleForBrainCalc = 'What is the result of expression?';

const collOfOperators = ['+', '-', '*'];
const getRandomItemOfArray = () => getRandomNumber(0, 3);
const getRandomOperator = () => collOfOperators[getRandomItemOfArray()];

const getRandomOfExpression = () => { // for example: '4 + 2'
  const stringOfExpression = `${getRandomNumber(1, 10)} ${getRandomOperator()} ${getRandomNumber(1, 10)}`;
  return stringOfExpression;
};

const pointOfQuestionForBrainCalc = () => getRandomOfExpression();

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
    pointOfQuestionForBrainCalc,
    correctAnswerForBrainCalc,
    'number',
  );
};

export default brainCalc;
