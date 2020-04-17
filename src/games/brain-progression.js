import { brainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleForBrainProgress = 'What number is missing in the progression?.';

const getArithmProgressionAndAnswer = (startNumber, step) => {
  const result = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    result.push(startNumber + step * i);
  }
  return result;
};

const getProgressionWithHiddenNumber = (coll, index) => {
  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    let item = coll[i];
    if (i === index) {
      item = '..';
    }
    result.push(item);
  }
  const progression = result;
  const answer = coll[index];
  return [progression, answer];
};

const getQuestionAndAnswer = () => {
  const progression = getArithmProgressionAndAnswer(getRandomNumber(1, 15), getRandomNumber(1, 5));
  const [question, answer] = getProgressionWithHiddenNumber(progression, getRandomNumber(1, 9));

  const questionString = question.join(' ');
  const answerString = answer.toString();

  return [questionString, answerString];
};

const brainProgresion = () => brainGames(
  ruleForBrainProgress,
  getQuestionAndAnswer,
);

export default brainProgresion;
