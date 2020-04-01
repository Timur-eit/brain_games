import readlineSync from 'readline-sync';

// export const greetingQuestion = 'Welcome to the Brain Games!\nMay I have your name? ';
// export const usernameRequest = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
// export const greeting = () => console.log(`Hello, ${usernameRequest}!`);
// export const askAQuestion = (expression) => readlineSync.question(`Question: ${expression}\nYour answer: `);

export const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

export const collOfExpressions = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
];

export const roundCounter = (condition) => {
  for (let i = 0; i < collOfExpressions.length; i += 1) {
    const item = collOfExpressions[i];
    const answer = readlineSync.question(`Question: ${item}\nYour answer: `);

    let trueAnswer;
    let result;

    if (condition) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    if (answer === trueAnswer) {
      console.log('Correct!');
      result = true;
    } else if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${'*****USER NAME*****'}!`);
      result = false;
      break;
    }
    if (result === true) {
      console.log(`Congratulations, ${'*****USER NAME*****'}!`);
    }
  }
};

/**

const brainGames = (gameRules, collOfExpressions, condition, answer1 = 'yes', answer2 = 'no') => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}\n${gameRules}`);
};
*/
