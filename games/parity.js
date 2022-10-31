import readlineSync from 'readline-sync';
import Math from 'math';
import index from '../src/index.js';

export default function parity() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let countAnswer = 0;
  let correctAnsewr = '';
  while (countAnswer !== 3) {
    const number = Math.floor(Math.random() * 100);
    correctAnsewr = number % 2 === 0 ? 'yes' : 'no';
    const indexAnswer = index(correctAnsewr, number);
    if (indexAnswer === 1) {
      countAnswer += 1;
    } else {
      return `${indexAnswer}${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
}
