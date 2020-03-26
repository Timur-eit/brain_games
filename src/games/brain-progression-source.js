import readlineSync from 'readline-sync';
import { getRandomNumber, isCorrect } from '../index.js';

const ruleForBrainProgress = 'What number is missing in the progression?\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

const getRandomItemOfArray = () => getRandomNumber(1, 10);

const getArithmeticProgression = (startNumber, step) => {
  const maxLength = 10;
  let counter = startNumber;
  const result = [];

  for (let i = 0; i < maxLength; i += 1) {
    result.push(counter);
    counter += step;
  }
  return result;
};

const toHideNumber = (coll, index) => {
  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (let item of coll) {
    if (item === coll[index]) {
      const marker = '..';
      item = marker;
    }
    result.push(item);
  }
  return result;
};

const collOfRandomNumberSequences = [
  (getArithmeticProgression(getRandomNumber(1, 30), getRandomNumber(1, 5))),
  (getArithmeticProgression(getRandomNumber(1, 30), getRandomNumber(1, 5))),
  (getArithmeticProgression(getRandomNumber(1, 30), getRandomNumber(1, 5))),
];

const brainProgres = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainProgress);

  let result;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfRandomNumberSequences) {
    // eslint-disable-next-line no-eval
    const indexOfcollOfArithmeticProgression = getRandomItemOfArray();
    const getHidenNumber = toHideNumber(item, indexOfcollOfArithmeticProgression);
    const outputForUser = getHidenNumber.join(' ');
    const answer = parseInt((readlineSync.question(`Question: ${outputForUser}\nYour answer: `)), 10);

    let trueAnswer;

    if (isCorrect(answer, item[indexOfcollOfArithmeticProgression])) {
      trueAnswer = answer;
    } else {
      trueAnswer = item[indexOfcollOfArithmeticProgression];
    }

    if (answer === trueAnswer) {
      console.log('Correct!');
      result = true;
    } else if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${username}!`);
      result = false;
      break;
    }
  }
  if (result === true) {
    console.log(`Congratulations, ${username}!`);
  }
};


export default brainProgres;
