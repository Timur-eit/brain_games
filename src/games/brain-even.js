import { brainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const pointOfQuestionForBrainEven = () => {
  const question = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(question);
  return [question, answer];
};

const brainEven = () => brainGames(ruleForBrainEven, pointOfQuestionForBrainEven);

export default brainEven;
