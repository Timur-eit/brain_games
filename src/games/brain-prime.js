import brainGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime, otherwise answer "no".';

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

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const runBrainPrime = () => brainGames(description, getRound);

export default runBrainPrime;
