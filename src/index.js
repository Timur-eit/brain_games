import readlineSync from 'readline-sync';

const nameRequst = (question) => readlineSync.question(question);
const greeting = () => console.log(`Hello, ${nameRequst('May I have your name? ')}!`);

export default greeting;

const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

/*
/ BRAIN-EVEN
*/

const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';
const collOfRandomNumbers = [getRandomNumber(1, 100), getRandomNumber(1, 100), getRandomNumber(1, 100)];
// 3 items of array => 3 questions to user

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const brainEven = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainEven);

  let result;
  // need to use "for...of" in this function instead of "Array.prototype.forEach()" due to "break"
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

/*
/ BRAIN-CALC
*/

const ruleForBrainCalc = 'What is the result of expression?\nPlease input only numbers otherwise your answer will be considered as "NaN" (not a number).';

const collOfOperators = ['+', '-', '*'];

const getRandomItemOfArray = () => getRandomNumber(0, 3);
// random index of coll

const getRandomOperator = () => {
  return collOfOperators[getRandomItemOfArray()];
};

const getRandomOfExpression = () => { // example return: 4 + 2
  const stringOfExpression = `${getRandomNumber(1, 10)} ${getRandomOperator()} ${getRandomNumber(1, 10)}`;
  return stringOfExpression
};

const collOfRandomExpressions = [getRandomOfExpression(), getRandomOfExpression(), getRandomOfExpression()];
// 3 items of array => 3 questions to user

const isCorrect = (answer, expression) => {
  if (answer === expression) {
    return true;
  }
  return false;
};

export const brainCalc = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(ruleForBrainCalc);

  let result;
  // need to use "for...of" in this function instead of "Array.prototype.forEach()"
  // eslint-disable-next-line no-restricted-syntax
  for (const item of collOfRandomExpressions) {
    // eslint-disable-next-line no-eval
    const expression = eval(item); // initial expression returns from the coll as a 'string'
    const answer = parseInt((readlineSync.question(`Question: ${item}\nYour answer: `)), 10);

    let trueAnswer;

    if (isCorrect(answer, expression)) { 
      trueAnswer = answer;
    } else {
      trueAnswer = expression;
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
