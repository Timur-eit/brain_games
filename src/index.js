import readlineSync from 'readline-sync';

export const usernameRequest = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = () => console.log(`Hello, ${usernameRequest}!`);

export const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

export const brainGames = (gameRules, collOfExpressions, condition, answer1 = 'yes', answer2 = 'no') => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}\n${gameRules}`);

  for (let i = 0; i < collOfExpressions.length; i += 1) {

    const item = collOfExpressions[i];
    const answer = readlineSync.question(`Question: ${item}\nYour answer: `);

    let trueAnswer;
    let result;

    if (condition(item)) {
      trueAnswer = answer1;
    } else {
      trueAnswer = answer2;
    }

    if (answer === trueAnswer) {
      console.log('Correct!');
      result = true;
    } else if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${username}!`);
      result = false;
      break;
    }
    if (result === true) {
      console.log(`Congratulations, ${'username'}!`);
    }
  }
};
