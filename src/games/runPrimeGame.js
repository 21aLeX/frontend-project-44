import readlineSync from 'readline-sync';
import index from '../index.js';

const funcCorrectAnsewr = () => {
  let correctAnsewr = 'yes';
  const number = Math.floor(Math.random() * (100 - 1) + 2);
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      correctAnsewr = 'no';
      break;
    }
  }
  return [correctAnsewr, number];
};

export default function runPrimeGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  index(funcCorrectAnsewr, name);
}
