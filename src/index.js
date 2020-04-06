import readlineSync from 'readline-sync';

export const greeting = (gameRules = null) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  if (gameRules === null) {
    console.log(`Hello, ${username}!`);
  } else {
    console.log(`Hello, ${username}!\n${gameRules}`);
  }
};


export const brainGames = (
  gameRules,
  pointOfQuestion,
  correctAnswer,
  answerFormat = 'number', // answerFormat may be 'string' or 'number'
) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!\n${gameRules}`);

  let correctAnswerIndicator;

  for (let round = 0; round < 3; round += 1) {
    const itemOfPointsOfQuestion = pointOfQuestion();

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
