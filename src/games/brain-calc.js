import brainGames from '../index.js';
import { getRandomNumber } from '../utils.js';

const ruleForBrainCalc = 'What is the result of expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default: return null;
  }
};

const getExpressionWithAnswer = () => {
  const collOfOperators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = collOfOperators[getRandomNumber(0, collOfOperators.length)];
  const expressionForUser = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operator).toString();
  return [expressionForUser, answer];
};

const runBrainCalc = () => brainGames(ruleForBrainCalc, getExpressionWithAnswer);

export default runBrainCalc;
