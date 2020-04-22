import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?.';

const getProgressionGameData = (startNumber, step, indexOfHiddenNum) => {
  const progression = [];
  for (let i = 0; i <= 9; i += 1) {
    let item = startNumber + step * i;
    if (i === indexOfHiddenNum) {
      item = '..';
    }
    progression.push(item);
  }
  const hiddenNumber = startNumber + indexOfHiddenNum * step;
  return [progression, hiddenNumber];
};


const getRound = () => {
  const [question, answer] = getProgressionGameData(
    getRandomNumber(1, 15),
    getRandomNumber(1, 5),
    getRandomNumber(0, 10),
  );

  return [question.join(' '), answer.toString()];
};


const runProgresion = () => gameEngine(description, getRound);

export default runProgresion;
