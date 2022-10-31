import readlineSync from 'readline-sync';
import Math from 'math';
import index from '../src/index.js';

function nodFinding(a, b) {
  const whole = Math.trunc(a / b);
  if (a % (b * whole) !== 0) {
    return nodFinding(b, a - b * whole);
  }
  return b;
}

export default function nod() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let countAnswer = 0;
  let correctAnsewr = '';
  while (countAnswer !== 3) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const strQuestion = `${number1} ${number2}`;
    correctAnsewr = nodFinding(number1, number2);
    const indexAnswer = index(correctAnsewr, strQuestion);
    if (indexAnswer === 1) {
      countAnswer += 1;
    } else {
      return `${indexAnswer}${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
}
