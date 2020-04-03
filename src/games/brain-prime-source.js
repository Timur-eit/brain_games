import { getRandomNumber, brainGames } from '../index.js';

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

const collOfPointsOfQuestion = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
];

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
    collOfPointsOfQuestion,
    correctAnswerForBrainPrime,
    'string',
  );
};

export default brainPrime;
