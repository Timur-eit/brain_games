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

const correctAnswerForBrainPrime = (answer, num) => {
  let trueAnswer;
  if (answer === 'yes' && isPrime(num)) {
    trueAnswer = 'yes';
  } else if (answer === 'no' && !isPrime(num)) {
    trueAnswer = 'no';
  } else if (answer !== 'yes' && isPrime(num)) {
    trueAnswer = 'yes';
  } else if (answer !== 'no' && !isPrime(num)) {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

export const brainPrime = () => {
  brainGames(
    ruleForBrainPrime,
    pointOfQuestionForBrainPrime,
    correctAnswerForBrainPrime,
  );
};

export default brainPrime;
