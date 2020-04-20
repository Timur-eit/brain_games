import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of expression?';

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

const getRound = () => {
  const collOfOperators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = collOfOperators[getRandomNumber(0, collOfOperators.length)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operator).toString();
  return [question, answer];
};

const runCalc = () => brainGames(description, getRound);

export default runCalc;
