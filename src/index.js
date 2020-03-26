import readlineSync from 'readline-sync';

const nameRequst = (question) => readlineSync.question(question);
const greeting = () => console.log(`Hello, ${nameRequst('May I have your name? ')}!`);

export default greeting;

export const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

export const isCorrect = (answer, expression) => {
  if (answer === expression) {
    return true;
  }
  return false;
};

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const isPrime = (num) => {
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
