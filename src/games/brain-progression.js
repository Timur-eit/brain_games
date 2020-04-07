import { brainGames } from '../index.js';

const ruleForBrainProgress = 'What number is missing in the progression?.';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};


const hideNumber = (coll, index) => {
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


const getArithmProgression = (startNumber, step, index) => {
  const maxLength = 10;
  let counter = startNumber;
  const result = [];
  for (let i = 0; i < maxLength; i += 1) {
    result.push(counter);
    counter += step;
  }
  return hideNumber(result, index);
};


const pointOfQuestion = () => {
  const progression = (
    getArithmProgression(getRandomNumber(1, 30), getRandomNumber(1, 5), getRandomNumber(1, 9))
  );
  return progression.join(' ');
};


const getHiddenNumber = (progression) => {
  const getArrayOfNumbers = (coll) => {
    const result = [];
    for (let i = 0; i < coll.length; i += 1) {
      let item = coll[i];
      if (item !== '..') {
        item = parseInt(coll[i], 10);
      }
      result.push(coll[i]);
    }
    return result;
  };
  const coll = getArrayOfNumbers(progression.split(' '));
  const index = coll.indexOf('..');
  let wantedNumber;
  if (index <= 7) {
    wantedNumber = coll[index + 1] - (coll[index + 2] - coll[index + 1]);
  } else if (index >= 8) {
    wantedNumber = coll[index - 1] - (coll[index - 1] - coll[index - 2]);
  }
  return wantedNumber;
};


const checkAnswer = (answer, question) => {
  if (String(answer) === String(getHiddenNumber(question))) {
    return true;
  }
  return false;
};


const brainProgresion = () => brainGames(
  ruleForBrainProgress,
  pointOfQuestion,
  getHiddenNumber,
  checkAnswer,
);

export default brainProgresion;
