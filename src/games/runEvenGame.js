import Math from 'math';
import index from '../index.js';

function funcCorrectAnsewr() {
  let correctAnsewr = '';
  const number = Math.floor(Math.random() * 100);
  correctAnsewr = number % 2 === 0 ? 'yes' : 'no';
  return [correctAnsewr, number];
}

export default function runEvenGame(cli) {
  const name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  index(funcCorrectAnsewr, name);
}
