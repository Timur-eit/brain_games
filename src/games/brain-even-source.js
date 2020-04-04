import { getRandomNumber, brainGames } from '../index.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const pointOfQuestionForBrainEven = () => getRandomNumber(1, 100);

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
    pointOfQuestionForBrainEven,
    correctAnswerForBrainEven,
    'string',
  );
};

export default brainEven;
