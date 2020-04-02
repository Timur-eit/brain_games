import { getRandomNumber, brainGames } from '../index.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

// опиши зачем нужен второй аргумент
const isEven = (number, arg2 = null) => {
  let result;
  if (arg2 === null) {
    if (number % 2 === 0) {
      result = true;
    } else if (arg2 !== null) {
      if (number % 2 === 0) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

const pointOfQuestion = getRandomNumber(1, 100);

const correctAnswerForBrainEven = (num, arg2 = null) => {
  let trueAnswer;

  if (arg2 === null) {
    if (isEven(num)) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
  } else if (arg2 !== null) {
    if (isEven(num)) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
  }
  return trueAnswer;
};

const brainEven = () => brainGames(ruleForBrainEven, pointOfQuestion, correctAnswerForBrainEven, 'string');

export default brainEven;
