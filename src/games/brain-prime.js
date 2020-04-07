import { brainGames } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const ruleForBrainPrime = 'Answer "yes" if given number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const pointOfQuestionForBrainPrime = () => getRandomNumber(1, 100);

const getCorrectAnswer = (num) => {
  let correctAnswer;
  if (isPrime(num)) {
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


export const brainPrime = () => {
  brainGames(
    ruleForBrainPrime,
    pointOfQuestionForBrainPrime,
    getCorrectAnswer,
    checkAnswer,
  );
};

export default brainPrime;
