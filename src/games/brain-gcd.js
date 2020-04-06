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

const correctAnswerForBrainGCD = (num, expression) => {
  const convertExpressionToArray = (string) => string.split(' ');

  const convertItemsOfArrayToInt = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      const item = array[i];
      result.push(parseInt(item, 10));
    }
    return result;
  };

  const answerForCheck = getGCD(...convertItemsOfArrayToInt(convertExpressionToArray(expression)));

  let trueAnswer;

  if (String(num) === String(answerForCheck)) {
    trueAnswer = num;
  } else {
    trueAnswer = answerForCheck;
  }
  return trueAnswer;
};


const brainGCD = () => {
  brainGames(
    ruleForBrainGCD,
    pointOfQuestionForBrainGCD,
    correctAnswerForBrainGCD,
  );
};

export default brainGCD;
