import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../index.js';

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const collOfRandomNumbers = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
]; // 3 items of array => 3 questions to user

const brainEven = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainEven);

  let result;
  // due to "break" need to use "for...of" in this function instead of "Array.prototype.forEach()"
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfRandomNumbers) {
    const answer = readlineSync.question(`Question: ${item}\nYour answer: `);

    let trueAnswer;

    if (isEven(item)) {
      trueAnswer = 'yes';
    } else if (!isEven(item)) {
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

export default brainEven;
