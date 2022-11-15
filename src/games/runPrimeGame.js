import readlineSync from 'readline-sync';
import engineGame from '../index.js';

const isDefinitionPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const funcCorrectAnsewr = () => {
  const number = Math.floor(Math.random() * (100 - 1) + 2);
  const correctAnsewr = isDefinitionPrimeNumber(number) ? 'yes' : 'no';
  return [correctAnsewr, number];
};

export default function runPrimeGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  engineGame(funcCorrectAnsewr, name);
}
