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
) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!\n${gameRules}`);

  for (let round = 1; round <= 3; round += 1) {
    const itemOfPointsOfQuestion = pointOfQuestion();

    const answer = readlineSync.question(
      `Question: ${itemOfPointsOfQuestion}\nYour answer: `,
    );

    const answerForChecking = correctAnswer(answer, itemOfPointsOfQuestion);

    if (answer === answerForChecking) {
      console.log('Correct!');
      if (round === 3) {
        console.log(`Congratulations, ${username}!`);
      }
    } else if (answer !== answerForChecking) {
      console.log(
        `"${answer}" is wrong answer ;(.`,
        `Correct answer was "${answerForChecking}".`,
        `\nLet's try again, ${username}!`,
      );
      break;
    }
  }
};
