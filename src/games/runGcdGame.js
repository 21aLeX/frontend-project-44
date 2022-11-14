import readlineSync from 'readline-sync';
import index from '../index.js';

const nodFinding = (a, b) => {
  const whole = Math.trunc(a / b);
  if (a % (b * whole) !== 0) {
    return nodFinding(b, a - b * whole);
  }
  return b;
};

const funcCorrectAnsewr = () => {
  let correctAnsewr = '';
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const strQuestion = `${number1} ${number2}`;
  correctAnsewr = nodFinding(number1, number2);
  return [correctAnsewr, strQuestion];
};

export default function runGcdGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  index(funcCorrectAnsewr, name);
}
