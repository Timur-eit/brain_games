import { brainGames } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const ruleForBrainCalc = 'What is the result of expression?';

const collOfOperators = ['+', '-', '*'];
const getRandomItemOfArray = () => getRandomNumber(0, 3);
const getRandomOperator = () => collOfOperators[getRandomItemOfArray()];

const getRandomOfExpression = () => { // for example: '4 + 2'
  const stringOfExpression = `${getRandomNumber(1, 10)} ${getRandomOperator()} ${getRandomNumber(1, 10)}`;
  return stringOfExpression;
};

const pointOfQuestionForBrainCalc = () => getRandomOfExpression();

const toCompute = (string) => {
  const coll = string.split(' ');
  const a = parseInt(coll[0], 10);
  const b = parseInt(coll[2], 10);
  let result;

  if (coll.includes('+')) {
    result = a + b;
  } else if (coll.includes('-')) {
    result = a - b;
  } else if (coll.includes('*')) {
    result = a * b;
  }
  return result;
};

const correctAnswerForBrainCalc = (num, expression) => {
  let trueAnswer;
  if (String(num) === String(toCompute(expression))) {
    trueAnswer = num;
  } else {
    trueAnswer = toCompute(expression);
  }
  return trueAnswer;
};

const brainCalc = () => {
  brainGames(
    ruleForBrainCalc,
    pointOfQuestionForBrainCalc,
    correctAnswerForBrainCalc,
  );
};

export default brainCalc;
