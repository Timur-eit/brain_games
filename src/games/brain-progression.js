import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?.';

const getProgression = (startNumber, step, indexOfHiddenNum) => {
  const progression = [startNumber];
  for (let i = 1; i < 10; i += 1) {
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
  const [question, answer] = getProgression(
    getRandomNumber(1, 15),
    getRandomNumber(1, 5),
    getRandomNumber(1, 8),
  );

  return [question.join(' '), answer.toString()];
};


const runProgresion = () => brainGames(description, getRound);

export default runProgresion;
