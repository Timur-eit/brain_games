import { brainGames } from '../index.js';

const ruleForBrainGCD = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const getGCD = (x, y) => { // Euclidean algorithm - method for computing the GCD
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const getCorrectAnswer = (expression) => {
  const convertExpressionToArray = (string) => string.split(' ');
  const convertItemsOfArrayToInt = (coll) => {
    const result = [];
    for (let i = 0; i < coll.length; i += 1) {
      const item = coll[i];
      result.push(parseInt(item, 10));
    }
    return result;
  };

  const pairOfSymbpols = convertExpressionToArray(expression);
  const collWithDigits = convertItemsOfArrayToInt(pairOfSymbpols);
  const finalResult = getGCD(...collWithDigits);
  return finalResult;
};

const pointOfQuestionForBrainGCD = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`;
  const answer = getCorrectAnswer(question).toString();

  return [question, answer];
};

const brainGCD = () => brainGames(ruleForBrainGCD, pointOfQuestionForBrainGCD);

export default brainGCD;
