import { brainGames } from '../index.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (num) => {
  let correctAnswer;
  if (isEven(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const pointOfQuestionForBrainEven = () => {
  const question = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(question);
  return [question, answer];
};

export const brainEven = () => brainGames(ruleForBrainEven, pointOfQuestionForBrainEven);

export default brainEven;