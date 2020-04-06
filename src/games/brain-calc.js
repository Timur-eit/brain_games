import { brainGames } from '../index.js';

const ruleForBrainCalc = 'What is the result of expression?';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const collOfOperators = ['+', '-', '*'];

const getRandomOfExpression = () => { // for example: '4 + 2'
  const stringOfExpression = `${getRandomNumber(1, 10)} ${collOfOperators[getRandomNumber(0, 3)]} ${getRandomNumber(1, 10)}`;
  return stringOfExpression;
};

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

const checkCorrectAnswer = (num, expression) => {
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
    getRandomOfExpression,
    checkCorrectAnswer,
  );
};

export default brainCalc;
