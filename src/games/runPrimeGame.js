import Math from 'math';
import index from '../index.js';

function funcCorrectAnsewr() {
  let correctAnsewr = 'yes';
  const number = Math.floor(Math.random() * (100 - 1) + 2);
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      correctAnsewr = 'no';
      break;
    }
  }
  return [correctAnsewr, number];
}

export default function runPrimeGame(cli) {
  const name = cli();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  index(funcCorrectAnsewr, name);
}
