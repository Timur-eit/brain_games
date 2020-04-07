import { brainGames } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const pointOfQuestionForBrainEven = () => getRandomNumber(1, 100);

const getCorrectAnswer = (num) => {
  let correctAnswer;
  if (isEven(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};


const checkAnswer = (answer, question) => {
  if (String(answer) === getCorrectAnswer(question)) {
    return true;
  }
  return false;
};


export const brainEven = () => {
  brainGames(
    ruleForBrainEven,
    pointOfQuestionForBrainEven,
    getCorrectAnswer,
    checkAnswer,
  );
};

export default brainEven;
