import * as brainGames from '../index.js';

export const ruleForBrainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const collOfRandomNumbers = [
  brainGames.getRandomNumber(1, 100),
  brainGames.getRandomNumber(1, 100),
  brainGames.getRandomNumber(1, 100),
];

export const brainEven = (gameRules, collOfExpressions, answer1 = 'yes', answer2 = 'no') => {
  const username = brainGames.usernameRequest;
  console.log(`${username}\n${gameRules}`);

  let result;
  for (let i = 0; i < collOfExpressions.length; i += 1) {
    const item = collOfExpressions[i];
    const answer = brainGames.askAQuestion(item);

    let trueAnswer;
    if (isEven(item)) {
      trueAnswer = answer1;
    } else {
      trueAnswer = answer2;
    }
    if (answer === trueAnswer) {
      console.log('Correct!');
      result = true;
    } else if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${username}!`);
      result = false;
      break;
    }
  }
  if (result === true) {
    console.log(`Congratulations, ${username}!`);
  }
};
