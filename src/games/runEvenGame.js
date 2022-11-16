import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const isdefineEven = (number) => number % 2 === 0;
const generateData = () => {
  const number = generateRandom();
  const correctAnswer = isdefineEven(number) ? 'yes' : 'no';
  return [correctAnswer, number];
};

const runEvenGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no"';
  runEngineGame(generateData, question);
};
export default runEvenGame;
