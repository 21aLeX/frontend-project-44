import readlineSync from 'readline-sync';
import Math from 'math';
import index from '../src/index.js';

export default function prime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let countAnswer = 0;
  let strQuestion = '';
  while (countAnswer !== 3) {
    let correctAnsewr = 'yes';
    const number = Math.floor(Math.random() * (100 - 1) + 2);
    strQuestion = number;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        correctAnsewr = 'no';
        break;
      }
    }
    const indexAnswer = index(correctAnsewr, strQuestion);
    if (indexAnswer === 1) {
      countAnswer += 1;
    } else {
      return `${indexAnswer}${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
}
