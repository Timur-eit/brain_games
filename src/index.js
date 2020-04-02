import readlineSync from 'readline-sync';

export const usernameRequest = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = () => console.log(`Hello, ${usernameRequest}!`);

export const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

export const brainGames = (gameRules, pointOfQuestion, correctAnswer, answerFormat = 'number') => {
  // answerFormat may be 'string' or 'number'
  const username = usernameRequest;
  greeting();
  console.log(gameRules);

  let correctAnswerIndicator;
  for (let round = 0; round < 3; round += 1) {
    const answer = readlineSync.question(`Question: ${pointOfQuestion}\nYour answer: `);

    let formatedAnswer;

    if (answerFormat === 'string') {
      formatedAnswer = String(answer);
    } else if (answerFormat === 'number') {
      formatedAnswer = parseInt(answer, 10);
    }

    const answerForChecking = correctAnswer(formatedAnswer, pointOfQuestion);

    if (formatedAnswer === answerForChecking) {
      console.log('Correct!');
      correctAnswerIndicator = true;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerForChecking}".\nLet's try again, ${username}!`);
      correctAnswerIndicator = false;
      break;
    }
  }
  if (correctAnswerIndicator === true) {
    console.log(`Congratulations, ${username}!`);
  }
};
