import { brainGames } from '../index.js';

const ruleForBrainPrime = 'Answer "yes" if given number is prime, otherwise answer "no".';

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

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

const getCorrectAnswer = (num) => {
  let correctAnswer;
  if (isPrime(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const pointOfQuestionForBrainPrime = () => {
  const question = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(question);

  return [question, answer];
};

export const brainPrime = () => brainGames(ruleForBrainPrime, pointOfQuestionForBrainPrime);

export default brainPrime;
