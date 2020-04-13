import { brainGames } from '../index.js';

const ruleForBrainCalc = 'What is the result of expression?';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const toCompute = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
  }
  return result;
};

const getRandomOfExpression = () => {
  const collOfOperators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = collOfOperators[getRandomNumber(0, collOfOperators.length)];
  const stringOfExpression = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = toCompute(firstNumber, secondNumber, operator).toString();
  return [stringOfExpression, answer];
};

const brainCalc = () => brainGames(ruleForBrainCalc, getRandomOfExpression);

export default brainCalc;
