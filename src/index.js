import readlineSync from 'readline-sync';

export const greetingQuestion = 'Welcome to the Brain Games!\nMay I have your name? ';
export const usernameRequest = readlineSync.question(greetingQuestion);
export const greeting = () => console.log(`Hello, ${usernameRequest}!`);
export const askAQuestion = (expression) => readlineSync.question(`Question: ${expression}\nYour answer: `);

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

export const brainGames = (gameRules, collOfExpressions, condition = 'someFunction', answer1 = 'yes', answer2 = 'no') => {
  // condition: for example function wich return number is even or not
  const username = usernameRequest;
  console.log(`${username}\n${gameRules}`);

  let result;
  for (let i = 0; i < collOfExpressions.length; i += 1) {
    const item = collOfExpressions[i];
    const answer = askAQuestion(item);

    let trueAnswer;
    if (condition) {
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
  }
  if (result === true) {
    console.log(`Congratulations, ${username}!`);
  }
};
