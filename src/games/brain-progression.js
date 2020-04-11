import { brainGames } from '../index.js';

const ruleForBrainProgress = 'What number is missing in the progression?.';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const getProgressionWithHiddenNumber = (coll, index) => {
  const markerForHiddenNumber = '..';
  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    let item = coll[i];
    if (item === coll[index]) {
      const marker = markerForHiddenNumber;
      item = marker;
    }
    result.push(item);
  }
  return result;
};

const getArithmProgressionAndAnswer = (startNumber, step, index) => {
  const maxLength = 10;
  let counter = startNumber;
  const result = [];
  for (let i = 0; i < maxLength; i += 1) {
    result.push(counter);
    counter += step;
  }
  const answer = result[index];
  const progression = getProgressionWithHiddenNumber(result, index);
  return [progression, answer];
};

const getQuestionAndAnswer = () => {
  const [progression, answer] = getArithmProgressionAndAnswer(
    getRandomNumber(1, 30),
    getRandomNumber(1, 5),
    getRandomNumber(1, 9),
  );

  const questionString = progression.join(' ');
  const answerString = answer.toString();

  return [questionString, answerString];
};


const brainProgresion = () => brainGames(
  ruleForBrainProgress,
  getQuestionAndAnswer,
);

export default brainProgresion;
