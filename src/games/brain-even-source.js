import { getRandomNumber, brainGames } from '../index.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number, arg2 = null) => {
  /** second argument was set because
   *  checking function of game engine
   *  takes two arguments
  */
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

const collOfPointsOfQuestion = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
];

const correctAnswerForBrainEven = (answer, num) => {
  let trueAnswer;
  if (answer === 'yes' && isEven(num)) {
    trueAnswer = 'yes';
  } else if (answer === 'no' && !isEven(num)) {
    trueAnswer = 'no';
  } else if (answer !== 'yes' && isEven(num)) {
    trueAnswer = 'yes';
  } else if (answer !== 'no' && !isEven(num)) {
    trueAnswer = 'no';
  }
  return trueAnswer;
};


export const brainEven = () => {
  brainGames(
    ruleForBrainEven,
    collOfPointsOfQuestion,
    correctAnswerForBrainEven,
    'string',
  );
};

export default brainEven;
