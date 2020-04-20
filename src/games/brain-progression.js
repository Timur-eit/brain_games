import brainGames from '../index.js';
import { getRandomNumber } from '../utils.js';

const ruleForBrainProgress = 'What number is missing in the progression?.';

const getProgressionAndAnswer = (startNumber, step) => {
  const progression = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    progression.push(startNumber + step * i);
  }

  const hiddenNumber = progression[getRandomNumber(0, progression.length)];
  const progressionWithHiddenNumber = progression.map((item) => {
    let numberOfProgression = item;
    if (numberOfProgression === hiddenNumber) {
      numberOfProgression = '..';
    }
    return numberOfProgression;
  });

  return [progressionWithHiddenNumber, hiddenNumber];
};


const getProgressionAndAnswerForGame = () => {
  const [question, answer] = getProgressionAndAnswer(getRandomNumber(1, 15), getRandomNumber(1, 5));
  const progressionForUser = question.join(' ');
  const answerForGameEngine = answer.toString();

  return [progressionForUser, answerForGameEngine];
};


const runBrainProgresion = () => brainGames(
  ruleForBrainProgress,
  getProgressionAndAnswerForGame,
);

export default runBrainProgresion;
