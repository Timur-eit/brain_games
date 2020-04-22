import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?.';

const getQuestion = (startNumber, step, indexToHide) => {
  const progression = [];
  for (let i = 0; i <= 9; i += 1) {
    let item = startNumber + step * i;
    if (i === indexToHide) {
      item = '..';
    }
    progression.push(item);
  }
  return progression.join(' ');
};


const getRound = () => {
  const startNumber = getRandomNumber(1, 15);
  const step = getRandomNumber(1, 5);
  const hiddenIndex = getRandomNumber(0, 10);

  const question = getQuestion(
    startNumber,
    step,
    hiddenIndex,
  );

  const answer = (startNumber + hiddenIndex * step).toString();

  return [question, answer];
};


const runProgresion = () => gameEngine(description, getRound);

export default runProgresion;
