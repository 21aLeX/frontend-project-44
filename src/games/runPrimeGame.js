import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isDefinePrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  // разве 1 должна проверяться на простоту?
  // если определение простого числа звучит так
  // ".. является простым, если оно отлично от 1 и делит.."
  return number !== 1;
};
const generateData = () => {
  const number = generateRandom(1);
  const correctAnswer = isDefinePrimeNumber(number) ? 'yes' : 'no';
  return [correctAnswer, number];
};

const runPrimeGame = () => {
  runEngineGame(generateData, question);
};
export default runPrimeGame;
