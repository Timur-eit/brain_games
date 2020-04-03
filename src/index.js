import readlineSync from 'readline-sync';

const usernameRequest = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = (gameRules = null) => {
  if (gameRules === null) {
    console.log(`Hello, ${usernameRequest}!`);
  } else {
    console.log(`Hello, ${usernameRequest}!\n${gameRules}`);
  }
};

export const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  const random = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return random(maxNumber);
};


export const brainGames = (
  gameRules,
  collOfpointsOfQuestion,
  correctAnswer,
  answerFormat = 'number', // answerFormat may be 'string' or 'number'
) => {
  const username = usernameRequest;
  greeting(gameRules);

  let correctAnswerIndicator;

  for (let i = 0; i < collOfpointsOfQuestion.length; i += 1) {
    const itemOfPointsOfQuestion = collOfpointsOfQuestion[i];

    const answer = readlineSync.question(
      `Question: ${itemOfPointsOfQuestion}\nYour answer: `,
    );

    let formatedAnswer;

    if (answerFormat === 'string') {
      formatedAnswer = String(answer);
    } else if (answerFormat === 'number') {
      formatedAnswer = parseInt(answer, 10);
    }

    const answerForChecking = correctAnswer(formatedAnswer, itemOfPointsOfQuestion);

    if (formatedAnswer === answerForChecking) {
      console.log('Correct!');
      correctAnswerIndicator = true;
    } else if (formatedAnswer !== answerForChecking) {
      console.log(
        `"${answer}" is wrong answer ;(.`,
        `Correct answer was "${answerForChecking}".`,
        `\nLet's try again, ${username}!`,
      );
      correctAnswerIndicator = false;
      break;
    }
  }
  if (correctAnswerIndicator === true) {
    console.log(`Congratulations, ${username}!`);
  }
};
