import readlineSync from 'readline-sync';

const brainGames = (description, valueOfRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  for (let round = 1; round <= 3; round += 1) {
    const [question, correctAnswer] = valueOfRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default brainGames;
