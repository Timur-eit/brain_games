import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const ruleForBrainPrime = 'Answer "yes" if given number is prime, otherwise answer "no".';

const collOfRandomNumbers = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
]; // 3 items of array => 3 questions to user

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

const brainPrime = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainPrime);

  let result;
  // due to "break" need to use "for...of" in this function instead of "Array.prototype.forEach()"
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfRandomNumbers) {
    const answer = readlineSync.question(`Question: ${item}\nYour answer: `);

    let trueAnswer;

    if (isPrime(item)) {
      trueAnswer = 'yes';
    } else if (!isPrime(item)) {
      trueAnswer = 'no';
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

export default brainPrime;
