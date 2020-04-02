import readlineSync from 'readline-sync';

export const usernameRequest = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = () => console.log(`Hello, ${usernameRequest}!`);

export const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};

export const brainGames = (gameRules, collOfpointsOfQuestion, correctAnswer, answerFormat = 'number') => {
  // answerFormat may be 'string' or 'number'
  const username = usernameRequest;
  greeting();
  console.log(gameRules);

  let correctAnswerIndicator;
  for (let i = 0; i < collOfpointsOfQuestion.length; i += 1) {
    const itemOfPointsOfQuestion = collOfpointsOfQuestion[i];
    const answer = readlineSync.question(`Question: ${itemOfPointsOfQuestion}\nYour answer: `);

    let formatedAnswer;

    if (answerFormat === 'string') {
      formatedAnswer = String(answer);
    } else if (answerFormat === 'number') {
      formatedAnswer = parseInt(answer, 10);
    }

    const answerForChecking = correctAnswer(formatedAnswer, itemOfPointsOfQuestion);

    if (answer === answerForChecking) {
      console.log('Correct!');
      correctAnswerIndicator = true;
    } else if (answer !== answerForChecking) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerForChecking}".\nLet's try again, ${username}!`);
      correctAnswerIndicator = false;
      break;
    }
  }
  if (correctAnswerIndicator === true) {
    console.log(`Congratulations, ${username}!`);
  }
};
