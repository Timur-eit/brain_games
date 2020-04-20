import brainGames from '../index.js';
import { getRandomNumber } from '../utils.js';

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

const getPrimeNumberAndAnswer = () => {
  const numberForUser = getRandomNumber(1, 100);
  const answer = isPrime(numberForUser) ? 'yes' : 'no';

  return [numberForUser, answer];
};

const runBrainPrime = () => brainGames(ruleForBrainPrime, getPrimeNumberAndAnswer);

export default runBrainPrime;
