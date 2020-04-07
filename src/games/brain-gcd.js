import { brainGames } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const ruleForBrainGCD = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => { // Euclidean algorithm - method for computing the GCD
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const pointOfQuestionForBrainGCD = () => `${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`;

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
  const array = convertExpressionToArray(expression);
  const collWithDigits = convertItemsOfArrayToInt(array);
  const finalResult = getGCD(...collWithDigits);
  return finalResult;
};

const checkAnswer = (answer, question) => {
  if (String(answer) === String(getCorrectAnswer(question))) {
    return true;
  }
  return false;
};


const brainGCD = () => {
  brainGames(
    ruleForBrainGCD,
    pointOfQuestionForBrainGCD,
    getCorrectAnswer,
    checkAnswer,
  );
};

export default brainGCD;
