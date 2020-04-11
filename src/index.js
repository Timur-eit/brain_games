import readlineSync from 'readline-sync';

export const greeting = (gameRules = null) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  if (gameRules === null) {
    console.log(`Hello, ${username}!`);
  } else {
    console.log(`Hello, ${username}!\n${gameRules}`);
  }
};

export const brainGames = (rules, question) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!\n${rules}`);

  for (let round = 1; round <= 3; round += 1) {
    const [itemOfQuestion, correctAnswer] = question();
    const answer = readlineSync.question(`Question: ${itemOfQuestion}\nYour answer: `);

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (round === 3) {
        console.log(`Congratulations, ${username}!`);
      }
    } else {
      console.log(
        `"${answer}" is wrong answer ;(.`,
        `Correct answer was "${correctAnswer}".`,
        `\nLet's try again, ${username}!`,
      );
      break;
    }
  }
};
