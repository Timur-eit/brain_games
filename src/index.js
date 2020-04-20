import readlineSync from 'readline-sync';

const brainGames = (rules, valueOfRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rules);

  for (let round = 1; round <= 3; round += 1) {
    const [itemOfQuestion, correctAnswer] = valueOfRound();
    const answer = readlineSync.question(`Question: ${itemOfQuestion}\nYour answer: `);

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
