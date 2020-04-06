import { brainGames } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const ruleForBrainProgress = 'What number is missing in the progression?.';

const maxLenOfProgression = 10;

const getArithmProgression = (startNumber, step) => {
  const maxLength = maxLenOfProgression;
  let counter = startNumber;
  const result = [];
  for (let i = 0; i < maxLength; i += 1) {
    result.push(counter);
    counter += step;
  }
  return result;
};


const markerForHiddenNumber = '..';

const hideNumber = (coll, index) => {
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

const converToString = (coll) => coll.join(' ');

const pointOfQuestionForBrainProgression = () => {
  const point = converToString(hideNumber(
    getArithmProgression(getRandomNumber(1, 30), getRandomNumber(1, 5)), getRandomNumber(1, 9),
  ));
  return point;
};

const getHiddenNumber = (coll, wantedNumIndex, step, maxIndex) => {
  let wantedNumber;
  if (wantedNumIndex >= 0 && wantedNumIndex < maxIndex) {
    wantedNumber = coll[wantedNumIndex + 1] - step;
  } else {
    wantedNumber = coll[wantedNumIndex - 1] + step;
  }
  return wantedNumber;
};


const getStepOfProgression = (coll) => {
  let result;
  if (coll[0] === '..') {
    result = coll[2] - coll[1];
  } else if (coll[1] === '..') {
    result = coll[3] - coll[2];
  } else {
    result = coll[1] - coll[0];
  }
  return result;
};


const correctAnswerForBrainProgression = (num, expression) => {
  const convertToArray = (string) => string.split(' ');
  const progressionForCheck = convertToArray(expression);

  const indexOfHidden = progressionForCheck.indexOf(markerForHiddenNumber);
  const step = getStepOfProgression(progressionForCheck);

  const answerForCheck = getHiddenNumber(
    progressionForCheck, indexOfHidden, step, maxLenOfProgression - 1,
  );

  let trueAnswer;

  if (num === answerForCheck) {
    trueAnswer = num;
  } else {
    trueAnswer = answerForCheck;
  }
  return trueAnswer;
};


const brainProgresion = () => brainGames(
  ruleForBrainProgress,
  pointOfQuestionForBrainProgression,
  correctAnswerForBrainProgression,
  'number',
);

export default brainProgresion;
