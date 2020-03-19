import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};


export default greeting;


// brain-even

export const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const getRandomNumber = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

const collOfRandomNumbers = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
/*
3 items of array => 3 questions to user
*/

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};


export const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleForBrainEven);
  // need to use "for...of" in this function instead of "Array.prototype.forEach()" due to "break"
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfRandomNumbers) {
    const answer = readlineSync.question(`Question: ${item}\nYour answer: `);
    const validAnswers = ['no', 'yes'];
    const zero = validAnswers[0];
    const one = validAnswers[1];
    let trueAnswer;

    if (isEven(item)) {
      trueAnswer = one;
    } else if (!isEven(item)) {
      trueAnswer = zero;
    }

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
      break;
    }

    console.log(`Congratulations, ${userName}!`);
  }
};
