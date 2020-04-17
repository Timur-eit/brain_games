import readlineSync from 'readline-sync';

export const greeting = () => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!`);
};

export const brainGames = (rules, question) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rules);

  for (let round = 1; round <= 3; round += 1) {
    const [itemOfQuestion, correctAnswer] = question();
    const answer = readlineSync.question(`Question: ${itemOfQuestion}\nYour answer: `);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${answer}" is wrong answer ;(.`,
        `Correct answer was "${correctAnswer}".`,
        `\nLet's try again, ${username}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
