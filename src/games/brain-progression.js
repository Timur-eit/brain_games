import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?.';

const getQuestion = (startNumber, step, indexOfHiddenNum) => {
  const progression = [];
  for (let i = 0; i <= 9; i += 1) {
    let item = startNumber + step * i;
    if (i === indexOfHiddenNum) {
      item = '..';
    }
    progression.push(item);
  }
  return progression.join(' ');
};


const getRound = () => {
  const startNumber = getRandomNumber(1, 15);
  const stepOfProgression = getRandomNumber(1, 5);
  const indexOfHiddenNumber = getRandomNumber(0, 10);

  const question = getQuestion(
    startNumber,
    stepOfProgression,
    indexOfHiddenNumber,
  );

  const answer = (startNumber + indexOfHiddenNumber * stepOfProgression).toString();

  return [question, answer];
};


const runProgresion = () => gameEngine(description, getRound);

export default runProgresion;
