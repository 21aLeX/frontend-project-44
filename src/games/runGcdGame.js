import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const question = 'Find the greatest common divisor of given numbers.';

const defineNod = (a, b) => {
  const whole = Math.trunc(a / b);
  if (a % (b * whole) !== 0) {
    return defineNod(b, a - b * whole);
  }
  return b;
};

const generateData = () => {
  const number1 = generateRandom(1, 100);
  const number2 = generateRandom(1, 100);
  const strQuestion = `${number1} ${number2}`;
  const correctAnswer = defineNod(number1, number2);
  return [correctAnswer, strQuestion];
};

const runGcdGame = () => {
  runEngineGame(generateData, question);
};
export default runGcdGame;
