import readlineSync from 'readline-sync';

const gameEngine = (description, round) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = round();
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

export default gameEngine;
